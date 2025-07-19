# Adding Example Screenshots

To add the actual before/after screenshots to the Examples section, follow these steps:

## 1. Screenshot Requirements

- **Format**: JPG or PNG
- **Aspect Ratio**: 4:3 (recommended 1200x900px or 1600x1200px)
- **Quality**: High resolution, clear and readable

## 2. File Names and Locations

Place the screenshots in the `public/examples/` directory with these exact names:

### Annette's Italian Ice

- `italian-ice-before.jpg` - Original dark-themed site
- `italian-ice-after.jpg` - Modern light design with product cards

### Wells Auto Service

- `wells-auto-before.jpg` - Text-heavy basic layout
- `wells-auto-after.jpg` - Professional hero with trust badges

### State Street Barbers

- `barbers-before.jpg` - Traditional barbershop interior
- `barbers-after.jpg` - Premium service cards with modern design

## 3. How to Take Screenshots

1. **Before screenshots**: Take full-page screenshots of the original sites
2. **After screenshots**: Take full-page screenshots of the redesigned sites at the URLs provided:
   - https://annettes-italian-ice.vercel.app/
   - https://wells-auto-service.vercel.app/
   - https://state-street-barbers.vercel.app/

## 4. Update Component

Once you have the screenshots, replace the placeholder divs in `components/examples.tsx` with actual Image components:

```tsx
// Replace the placeholder divs with:
<Image
	src={example.beforeImage}
	alt={`${example.name} - Before redesign`}
	fill
	className="object-cover"
/>
```

## 5. Testing

After adding the images:

1. Run `npm run dev`
2. Navigate to the Examples section
3. Verify images load correctly
4. Check that the "View Live Site" buttons work

## Current Placeholder Status

The Examples section currently shows descriptive placeholders that explain what each transformation looks like. This provides context while you gather the actual screenshots.
