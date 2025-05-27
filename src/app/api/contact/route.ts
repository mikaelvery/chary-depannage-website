import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Vérification des champs obligatoires
    if (!data.email || !data.name || !data.message) {
      return new Response(
        JSON.stringify({ error: "Nom, email ou message manquant" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail artisan (toi)
    const mailOptionsArtisan = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `📩 Nouveau message de ${data.name} via le formulaire Contact`,
      text: `Nom : ${data.name}\nEmail : ${data.email}\nMessage : ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:20px; color:#222;">
          <h2 style="color:#C27803;">📩 Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-line;">${data.message}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Email généré automatiquement via votre site web.</p>
        </div>
      `,
    };

    // Mail confirmation client
    const mailOptionsClient = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "✅ Merci pour votre message - Confirmation de contact",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:20px; color:#222;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="https://chary-depannage-website.vercel.app/logo-gg.png" alt="G&G Intervention" style="height:80px;" />
          </div>
          <h2 style="color:#C27803;">Merci pour votre message, ${data.name} !</h2>
          <p>Nous avons bien reçu votre message et nous vous répondrons rapidement.</p>
          <p>Voici un récapitulatif :</p>
          <p><strong>Votre message :</strong></p>
          <p style="white-space: pre-line;">${data.message}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">
            Ce message est un accusé de réception automatique envoyé par votre site web.
          </p>
        </div>
      `,
    };

    // Envoi des deux mails en parallèle
    await Promise.all([
      transporter.sendMail(mailOptionsArtisan),
      transporter.sendMail(mailOptionsClient),
    ]);

    return new Response(JSON.stringify({ message: "Emails envoyés avec succès." }), {
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
