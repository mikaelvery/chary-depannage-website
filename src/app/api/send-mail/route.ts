import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ARTISAN_EMAIL,
      replyTo: data.email,
      subject: "Nouvelle demande de devis - G & G INTERVENTION",
      text: `Nouvelle demande de devis reçue de ${data.prenom} ${data.nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://your-domain.com/logo-gg.png" alt="G & G Intervention" style="height: 80px;" />
          </div>

          <h2 style="color: #3A7C4A;">📬 Nouvelle demande de devis</h2>

          <h3>🛠️ Informations du projet</h3>
          <ul>
            <li><strong>Type client :</strong> ${data.typeClient}</li>
            <li><strong>Type de projet :</strong> ${data.typeProjet}</li>
            <li><strong>Urgence :</strong> ${data.urgence}</li>
            <li><strong>Description :</strong> ${data.description}</li>
            <li><strong>Budget :</strong> ${data.budget}</li>
            <li><strong>Localisation :</strong> ${data.localisation}</li>
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

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email envoyé" }), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ error: "Erreur inconnue" }), { status: 500 });
  }
}
