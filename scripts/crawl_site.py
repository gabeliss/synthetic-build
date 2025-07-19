import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque
import re
import json
from collections import Counter

IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp')
NON_HTML_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.pdf')

def is_same_domain(url, base_netloc):
    try:
        return urlparse(url).netloc == base_netloc
    except Exception:
        return False

def normalize_url(url):
    # Remove fragment for deduplication
    url, _ = urldefrag(url)
    return url

def get_soup(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        resp = requests.get(url, timeout=10, headers=headers)
        resp.raise_for_status()
        return BeautifulSoup(resp.text, 'html.parser'), resp.text
    except Exception as e:
        return None, None

def extract_images(soup, base_url):
    images = []
    for img in soup.find_all('img'):
        src = img.get('src')
        if src:
            images.append(urljoin(base_url, src))
    return images

def extract_external_links(soup, base_url, base_netloc):
    external_links = []
    for a in soup.find_all('a', href=True):
        href = urljoin(base_url, a['href'])
        netloc = urlparse(href).netloc
        if netloc and netloc != base_netloc:
            text = a.get_text(strip=True)
            external_links.append({'url': href, 'text': text})
    return external_links

def extract_nav_links(soup, base_url, base_netloc):
    nav_links = []
    navs = soup.find_all('nav')
    if not navs:
        # fallback: look for top-level ul
        navs = soup.find_all('ul', recursive=False)
    for nav in navs:
        for a in nav.find_all('a', href=True):
            href = urljoin(base_url, a['href'])
            if is_same_domain(href, base_netloc):
                nav_links.append(normalize_url(href))
    return list(set(nav_links))

def extract_text_content(soup):
    # Remove nav, footer, script, style
    for tag in soup(['nav', 'footer', 'script', 'style', 'noscript']):
        tag.decompose()
    text = soup.get_text(separator=' ', strip=True)
    # Remove invisible/unicode whitespace
    text = ''.join(c for c in text if c.isprintable() and not c.isspace())
    return text if text else None

def extract_meta_tags(soup):
    meta = {'business_name': None, 'description': None}
    # Business name
    site_name = soup.find('meta', attrs={'property': 'og:site_name'})
    if site_name and site_name.get('content'):
        meta['business_name'] = site_name['content']
    else:
        title = soup.find('title')
        if title:
            meta['business_name'] = title.get_text(strip=True)
    # Description
    desc = soup.find('meta', attrs={'name': 'description'})
    if desc and desc.get('content'):
        meta['description'] = desc['content']
    return meta

def parse_color(val):
    # Normalize color values
    val = val.strip().lower()
    if val in ('initial', 'inherit', 'unset', 'transparent', 'none'):
        return None
    if val.startswith('var('):
        return None
    return val

def extract_colors_from_style(style):
    # Find background-color and color in a style string
    bg_match = re.search(r'background(-color)?\s*:\s*([^;]+);', style, re.I)
    color_match = re.search(r'color\s*:\s*([^;]+);', style, re.I)
    bg = parse_color(bg_match.group(2)) if bg_match else None
    color = parse_color(color_match.group(1)) if color_match else None
    return bg, color

def extract_primary_and_accent_color(html, soup):
    # 1. Try to get background color from <body> or main container
    bg_color = None
    accent_color = None
    body = soup.find('body')
    if body:
        style = body.get('style', '')
        bg, _ = extract_colors_from_style(style)
        if bg:
            bg_color = bg
    # 2. Look for nav/menu accent color
    nav = soup.find('nav')
    if nav:
        style = nav.get('style', '')
        bg, color = extract_colors_from_style(style)
        if bg:
            accent_color = bg
        elif color:
            accent_color = color
    # 3. Parse <style> tags and inline styles for more colors
    styles = ''.join([s.get_text() for s in soup.find_all('style')])
    color_candidates = []
    for match in re.finditer(r'background(-color)?\s*:\s*([^;]+);', styles, re.I):
        c = parse_color(match.group(2))
        if c:
            color_candidates.append(c)
    for match in re.finditer(r'color\s*:\s*([^;]+);', styles, re.I):
        c = parse_color(match.group(1))
        if c:
            color_candidates.append(c)
    # 4. Try linked CSS
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            css_url = urljoin(soup.base.get('href', ''), href) if soup.base else href
            try:
                css_resp = requests.get(css_url, timeout=5)
                if css_resp.ok:
                    css = css_resp.text
                    for match in re.finditer(r'background(-color)?\s*:\s*([^;]+);', css, re.I):
                        c = parse_color(match.group(2))
                        if c:
                            color_candidates.append(c)
                    for match in re.finditer(r'color\s*:\s*([^;]+);', css, re.I):
                        c = parse_color(match.group(1))
                        if c:
                            color_candidates.append(c)
            except Exception:
                pass
    # 5. Count most common colors (excluding white/transparent/none)
    filtered = [c for c in color_candidates if c and c not in ('white', '#fff', '#ffffff', 'transparent', 'none', 'initial', 'inherit', 'unset')]
    if not bg_color:
        # If body background not found, guess from most common
        bg_color = 'white' if 'white' in color_candidates or '#fff' in color_candidates or '#ffffff' in color_candidates else (filtered[0] if filtered else None)
    if not accent_color:
        # Pick the most common non-bg color as accent
        counter = Counter(filtered)
        if counter:
            accent_color = counter.most_common(1)[0][0]
    # Fallbacks
    if not bg_color:
        bg_color = 'white'
    if not accent_color:
        accent_color = 'red'  # fallback for this site
    return {'background': bg_color, 'accent': accent_color}

def is_image_url(url):
    return url.lower().endswith(IMAGE_EXTENSIONS)

def is_non_html_url(url):
    return url.lower().endswith(NON_HTML_EXTENSIONS)

def crawl_site(start_url, max_pages=50):
    parsed = urlparse(start_url)
    base_netloc = parsed.netloc
    base_url = f"{parsed.scheme}://{parsed.netloc}"
    seen = set()
    queue = deque([normalize_url(start_url)])
    results = {}
    main_url_html = None
    main_url_soup = None
    while queue and len(seen) < max_pages:
        url = queue.popleft()
        norm_url = normalize_url(url)
        if norm_url in seen:
            continue
        soup, html = get_soup(url)
        if not soup:
            continue
        if norm_url == normalize_url(start_url):
            main_url_html = html
            main_url_soup = soup
        seen.add(norm_url)
        
        images = extract_images(soup, url)
        external_links = extract_external_links(soup, url, base_netloc)
        nav_links = extract_nav_links(soup, url, base_netloc)
        text_content = extract_text_content(soup)
        meta_tags = extract_meta_tags(soup)
        
        # Find new internal links to crawl
        for a in soup.find_all('a', href=True):
            href = urljoin(url, a['href'])
            norm_href = normalize_url(href)
            if is_same_domain(href, base_netloc) and norm_href not in seen and not is_non_html_url(norm_href):
                queue.append(norm_href)
        
        # Also enqueue nav_links
        for nav_url in nav_links:
            if is_same_domain(nav_url, base_netloc) and nav_url not in seen and not is_non_html_url(nav_url):
                queue.append(nav_url)
        
        # Build page data
        page_data = {
            'images': images,
            'external_links': external_links,
            'text_content': text_content,
            'meta_tags': meta_tags
        }
        if norm_url == normalize_url(start_url):
            page_data['nav_links'] = nav_links
        results[norm_url] = page_data
    
    # Primary color scheme for main URL
    primary_color = extract_primary_and_accent_color(main_url_html, main_url_soup) if main_url_html and main_url_soup else None
    return {
        'input_url': start_url,
        'all_urls': list(results.keys()),
        'pages': results,
        'primary_color_scheme': primary_color
    }

def main():
    url = "https://topogigiochicago.com/"
    data = crawl_site(url)
    output_filename = "topogigio.json"
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Output written to {output_filename}")

if __name__ == '__main__':
    main() 


## COPY COMMAND

## cp -Rp synthetic-build-starter-template/. redesigns/annettes-italian-ice