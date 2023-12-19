import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_APIKEY)

export const POST: APIRoute = async ({ request }) => {
  const data = await request.clone().json()
  const { name, email, message, lang } = data as {
    name: string
    email: string
    message: string
    lang: string
  }
  let regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  const messages: any = {
    en: {
      fields: "Missing required fields.",
      email: "The email is not valid.",
      success: "Success! Message sent",
    },
    es: {
      fields: "Faltan campos requeridos.",
      email: "El correo no es válido.",
      success: "¡Éxito! Mensaje enviado",
    },
  }

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: messages[lang].fields,
      }),
      { status: 400 }
    )
  }

  if (!regexEmail.test(email)) {
    return new Response(
      JSON.stringify({
        message: messages[lang].email,
      }),
      { status: 400 }
    )
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: import.meta.env.RESEND_TOEMAIL,
      subject: "[PORTAFOLIO] Nuevo mensaje",
      html: `
      <b>Mensaje:</b><br/>
      ${message}
      <hr>
      <b>De:</b>
      ${email}
      `,
    })

    return new Response(
      JSON.stringify({
        message: messages[lang].success,
      }),
      { status: 200 }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e,
      }),
      { status: 400 }
    )
  }
}
