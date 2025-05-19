import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();    
    if (!data.email || !data.accepted) {
      return new Response(
        JSON.stringify({ error: "Email client manquant ou consentement non donné" }),
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

    // Mail artisan (déjà fait)
    const mailOptionsArtisan = {
      from: process.env.EMAIL_USER,
      to: process.env.ARTISAN_EMAIL,
      replyTo: data.email,
      subject: "Nouvelle demande de devis - G & G INTERVENTION",
      text: `Nouvelle demande de devis reçue de ${data.prenom} ${data.nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://chary-depannage-website.vercel.app/logo-gg.png" alt="G & G Intervention" style="height: 80px;" />
          </div>

          <h2 style="color: #3A7C4A;">📬 Nouvelle demande de devis</h2>

          <h3>🛠️ Informations du projet</h3>
          <ul>
            <li><strong>Type client :</strong> ${data.typeClient}</li>
            <li><strong>Type de projet :</strong> ${data.typeProjet}</li>
            <li><strong>Urgence :</strong> ${data.urgence}</li>
            <li><strong>Description :</strong> ${data.description}</li>
            <li><strong>Budget :</strong> ${data.budget}</li>
            <li><strong>Ville :</strong> ${data.ville}</li>
            <li><strong>Code postal :</strong> ${data.codePostal}</li>
          </ul>

          <h3>🙍 Informations personnelles</h3>
          <ul>
            <li><strong>Prénom :</strong> ${data.prenom}</li>
            <li><strong>Nom :</strong> ${data.nom}</li>
            <li><strong>Email :</strong> ${data.email}</li>
            <li><strong>Téléphone :</strong> ${data.telephone}</li>
          </ul>

          <p><strong>✅ Consentement :</strong> ${data.accepted ? "Oui" : "Non"}</p>

          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: #777;">
            Cet email a été généré automatiquement via le site web G & G Intervention.
          </p>
        </div>
      `
    };

    // Mail confirmation client
    const mailOptionsClient = {
      from: process.env.EMAIL_USER,
      to: data.email,  // envoie au client
      subject: "Confirmation de votre demande de devis - G & G INTERVENTION",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <h2 style="color: #3A7C4A;">✅ Confirmation de votre demande de devis</h2>
          <p>Bonjour ${data.prenom},</p>
          <p>Nous avons bien reçu votre demande de devis. Voici un récapitulatif :</p>

          <h3>🛠️ Informations du projet</h3>
          <ul>
            <li><strong>Type client :</strong> ${data.typeClient}</li>
            <li><strong>Type de projet :</strong> ${data.typeProjet}</li>
            <li><strong>Urgence :</strong> ${data.urgence}</li>
            <li><strong>Description :</strong> ${data.description}</li>
            <li><strong>Budget :</strong> ${data.budget}</li>
            <li><strong>Ville :</strong> ${data.ville}</li>
            <li><strong>Code postal :</strong> ${data.codePostal}</li>
          </ul>

          <p>Nous reviendrons vers vous rapidement. Merci de votre confiance.</p>

          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: #777;">
            Cet email a été généré automatiquement via le site web G & G Intervention.
          </p>
        </div>
      `,
    };

    // Envoi des deux mails en parallèle
    await Promise.all([
      transporter.sendMail(mailOptionsArtisan),
      transporter.sendMail(mailOptionsClient),
    ]);

    return new Response(JSON.stringify({ message: "Emails envoyés aux deux destinataires" }), {
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
