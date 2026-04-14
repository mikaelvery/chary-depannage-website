import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Mots-clés typiques des spammeurs (SEO, marketing, etc.)
const SPAM_KEYWORDS = [
  "seo", "référencement", "referencement", "marketing", "spécialiste", "specialiste",
  "expert en", "agence", "backlink", "google ranking", "traffic", "followers",
  "crypto", "bitcoin", "investissement", "rendement", "prêt", "pret urgent",
  "whatsapp", "telegram", "cliquez ici", "click here", "free", "gratuit",
  "offre limitée", "offre limitee", "promotion", "gagnez", "gagnez de l'argent",
  "make money", "earn money", "casino", "bet", "pari",
];

// Délai minimum en ms entre le chargement du formulaire et l'envoi (3 secondes)
const MIN_FILL_TIME_MS = 3000;

function containsSpam(text: string): boolean {
  const lower = text.toLowerCase();
  return SPAM_KEYWORDS.some((kw) => lower.includes(kw));
}

function containsUrl(text: string): boolean {
  return /https?:\/\//i.test(text) || /www\./i.test(text);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // --- Protection honeypot ---
    // Si le champ caché est rempli, c'est un bot : on répond 200 pour ne pas alerter
    if (data._hp && data._hp.trim() !== "") {
      return new Response(JSON.stringify({ message: "Emails envoyés avec succès." }), {
        status: 200,
      });
    }

    // --- Vérification du temps de remplissage ---
    if (data._t && typeof data._t === "number") {
      const elapsed = Date.now() - data._t;
      if (elapsed < MIN_FILL_TIME_MS) {
        // Réponse silencieuse pour ne pas alerter les bots
        return new Response(JSON.stringify({ message: "Emails envoyés avec succès." }), {
          status: 200,
        });
      }
    }

    // --- Vérification des champs obligatoires ---
    if (!data.email || !data.name || !data.message) {
      return new Response(
        JSON.stringify({ error: "Nom, email ou message manquant" }),
        { status: 400 }
      );
    }

    // --- Validation de l'email ---
    if (!isValidEmail(data.email)) {
      return new Response(
        JSON.stringify({ error: "Adresse email invalide" }),
        { status: 400 }
      );
    }

    // --- Détection de spam dans le message et le nom ---
    const textToCheck = `${data.name} ${data.message}`;
    if (containsSpam(textToCheck) || containsUrl(data.message)) {
      // Réponse silencieuse pour ne pas alerter les bots
      return new Response(JSON.stringify({ message: "Emails envoyés avec succès." }), {
        status: 200,
      });
    }

    // --- Longueur maximale du message (évite les bombes texte) ---
    if (data.message.length > 3000) {
      return new Response(
        JSON.stringify({ error: "Message trop long (3000 caractères maximum)" }),
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
