import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, businessName, website, email, message, selectedPlan, includeHosting } = body

    // Validate required fields
    if (!name || !businessName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Synthetic Build <noreply@syntheticbuild.com>',
      to: ['gabe@syntheticbuild.com'],
      subject: `New Website Preview Request - ${businessName}${selectedPlan ? ` (${selectedPlan})` : ''}${includeHosting ? ' + Hosting' : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Website Preview Request</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${selectedPlan ? `<p><strong>Interested In:</strong> ${selectedPlan}</p>` : ''}
            ${includeHosting ? `<p><strong>Hosting & Support:</strong> Yes (${includeHosting ? '$29/month' : 'No'})</p>` : ''}
            ${website ? `<p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>` : ''}
          </div>
          
          ${message ? `
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Business Details</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This request was submitted from the Synthetic Build contact form.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 