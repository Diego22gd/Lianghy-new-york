import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, b_website_url, timestamp } = body;

    // 1. Honeypot check: If the hidden honeypot field is filled, it's a bot.
    // Return fake success so bots do not retry or detect the trap.
    if (b_website_url && b_website_url.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Mensaje recibido correctamente." },
        { status: 200 }
      );
    }

    // 2. Time-gate check: If submitted faster than 1.5 seconds, likely automated bot.
    if (timestamp) {
      const duration = Date.now() - Number(timestamp);
      if (duration < 1500) {
        return NextResponse.json(
          { success: true, message: "Mensaje recibido correctamente." },
          { status: 200 }
        );
      }
    }

    // 3. Validation
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    // 4. Log or dispatch message
    console.log("Nueva consulta de contacto recibida:", {
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
        message: "¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar formulario de contacto:", error);
    return NextResponse.json(
      { success: false, error: "Hubo un error al procesar tu solicitud. Por favor intenta más tarde." },
      { status: 500 }
    );
  }
}
