import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <DefaultLayout>
      <PageLayout title="Politique de confidentialité">
        <section className="space-y-6 text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            1. Collecte des données personnelles
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Aucune donnée personnelle n’est collectée automatiquement sur ce site. Vous pouvez naviguer librement sans transmettre d'informations nominatives.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            2. Formulaires de contact
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Les informations saisies via le formulaire de contact (nom, email, message) sont uniquement utilisées pour répondre à vos demandes. Aucune donnée n’est partagée ni conservée sans votre consentement.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            3. Outils d’analyse
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Des outils d’analyse comme Google Analytics peuvent être utilisés afin de mieux comprendre l’audience du site. Ces données sont anonymisées et utilisées uniquement à des fins statistiques.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            4. Sécurité
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Toutes les précautions nécessaires sont prises pour garantir la sécurité de vos données. Toutefois, aucune transmission de données sur Internet n’est totalement sécurisée.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            5. Vos droits
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour toute demande, contactez <a href="mailto:gg.intervention@gmail.com" className="text-blue-600 underline">gg.intervention@gmail.com</a>.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            6. Cookies
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Ce site peut utiliser des cookies à des fins de navigation ou d’analyse. Vous pouvez désactiver les cookies depuis les paramètres de votre navigateur.
          </p>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-10 text-xs text-gray-500 text-center">
            Dernière mise à jour : mai 2025
          </p>
        </section>
      </PageLayout>
    </DefaultLayout>
  );
}
