import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, b_website_url, timestamp } = body;

    // 1. Honeypot check: If the hidden honeypot field is filled, it's a bot.
    // Return fake success so bots do not retry or detect the trap.
    if (b_website_url && b_website_url.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Message received successfully." },
        { status: 200 }
      );
    }

    // 2. Time-gate check: If submitted faster than 1.5 seconds, likely automated bot.
    if (timestamp) {
      const duration = Date.now() - Number(timestamp);
      if (duration < 1500) {
        return NextResponse.json(
          { success: true, message: "Message received successfully." },
          { status: 200 }
        );
      }
    }

    // 3. Validation
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 4. Log or dispatch message
    console.log("New contact inquiry received:", {
      name,
      email,
      service: service || "General",
      message,
      receivedAt: new Date().toISOString(),
    });

    // If RESEND_API_KEY or email service configured in future, trigger email sending here.

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "There was an error processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
