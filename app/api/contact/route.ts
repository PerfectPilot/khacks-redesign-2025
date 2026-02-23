import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const { name, email, inquiryReason, description, captchaToken } =
            await request.json()

        // Validate required fields
        if (!name || !email || !inquiryReason || !description) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            )
        }

        if (!captchaToken) {
            return NextResponse.json(
                { error: "Please complete the captcha." },
                { status: 400 }
            )
        }

        // Verify hCaptcha token server-side
        const captchaResponse = await fetch("https://api.hcaptcha.com/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.HCAPTCHA_SECRET_KEY!,
                response: captchaToken,
            }),
        })

        const captchaResult = await captchaResponse.json()

        if (!captchaResult.success) {
            return NextResponse.json(
                { error: "Captcha verification failed. Please try again." },
                { status: 400 }
            )
        }

        // Format the inquiry reason for display
        const reasonLabels: Record<string, string> = {
            "kleinhacks-question": "KleinHacks Question",
            "website-issue": "Issue with Website",
        }
        const reasonLabel = reasonLabels[inquiryReason] || inquiryReason

        // Send email via Resend
        const { error } = await resend.emails.send({
            from: "KleinHacks Contact Form <onboarding@resend.dev>",
            to: ["kleinhacks@kleinisd.net"],
            replyTo: email,
            subject: `[KleinHacks Contact] ${reasonLabel} — from ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name</td>
              <td style="padding: 8px 0; color: #4b5563;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 0; color: #4b5563;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Reason</td>
              <td style="padding: 8px 0; color: #4b5563;">${reasonLabel}</td>
            </tr>
          </table>
          <hr style="border: 1px solid #e5e7eb;" />
          <h3 style="color: #374151;">Description</h3>
          <p style="color: #4b5563; white-space: pre-wrap;">${description}</p>
        </div>
      `,
        })

        if (error) {
            console.error("Resend error:", error)
            return NextResponse.json(
                { error: "Failed to send email. Please try again later." },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error("Contact API error:", err)
        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 }
        )
    }
}
