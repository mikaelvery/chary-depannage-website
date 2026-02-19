import LegalLayout from "../_components/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité | GG Intervention Metz",
  description: "Politique de confidentialité et RGPD de GG Intervention Metz.",
  robots: "noindex, follow",
  alternates: { canonical: "https://ggintervention.fr/politique-de-confidentialite" },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <div>
        <h2 className="text-white font-bold text-base mb-3">1. Collecte des données</h2>
        <p>Aucune donnée personnelle n'est collectée automatiquement. Vous pouvez naviguer librement sans transmettre d'informations nominatives.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">2. Formulaires de contact</h2>
        <p>Les informations saisies (nom, email, message) sont uniquement utilisées pour répondre à vos demandes. Aucune donnée n'est partagée ni conservée sans votre consentement.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">3. Outils d'analyse</h2>
        <p>Des outils d'analyse anonymisés peuvent être utilisés afin de mieux comprendre l'audience du site (statistiques uniquement).</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">4. Sécurité</h2>
        <p>Toutes les précautions nécessaires sont prises pour garantir la sécurité de vos données. Toutefois, aucune transmission sur Internet n'est totalement sécurisée.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">5. Vos droits (RGPD)</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression. Contactez <a href="mailto:gg.intervention@gmail.com" className="text-[#F4500A] hover:underline">gg.intervention@gmail.com</a>.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">6. Cookies</h2>
        <p>Ce site peut utiliser des cookies à des fins de navigation ou d'analyse. Vous pouvez les désactiver depuis les paramètres de votre navigateur.</p>
      </div>
      <p className="text-xs text-[#7A7570]/60 text-center pt-4">Dernière mise à jour : mai 2025</p>
    </LegalLayout>
  );
}