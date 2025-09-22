import DefaultLayout from '../_components/DefaultLayout';
import PageLayout from '../_components/PageLayout';

export const metadata = {
  title: "Mentions légales | GG Intervention Metz",
  description:
    "Mentions légales du site GG Intervention Metz. Retrouvez les informations sur l’éditeur, l’hébergeur, la propriété intellectuelle, l’utilisation du site et la gestion des données personnelles.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://ggintervention.fr/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | GG Intervention Metz",
    description:
      "Informations légales et coordonnées de GG Intervention Metz : éditeur, hébergeur, conditions d’utilisation et données personnelles.",
    url: "https://ggintervention.fr/mentions-legales",
    siteName: "GG Intervention",
    type: "article",
  },
};

export default function LegalNotice() {
  return (
    <DefaultLayout>
      <PageLayout title="Mentions légales">
        <section className="space-y-6 text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">
          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">1. Présentation du site</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            En application de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <strong>https://gg-intervention.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul data-aos="fade-up" data-aos-delay="150" className="list-disc list-inside ml-4">
            <li><strong>Propriétaire / Éditeur :</strong> Guillaume Chary – Micro-entrepreneur</li>
            <li><strong>Email :</strong> <a href="mailto:gg.intervention@gmail.com" className="text-blue-600 underline">gg.intervention@gmail.com</a></li>
            <li><strong>Hébergeur :</strong> Hostinger – <a href="https://www.ovh.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.ovh.com/</a></li>
          </ul>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">2. Conditions d’utilisation</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            L’utilisation du site implique l’acceptation pleine et entière des présentes conditions. Le site est accessible en permanence sauf en cas de maintenance ou force majeure. L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des informations présentées.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Tous les contenus présents sur ce site (textes, images, logos, vidéos, etc.) sont la propriété exclusive de Guillaume Chary ou de ses partenaires et sont protégés par le droit de la propriété intellectuelle. Toute reproduction, exploitation ou diffusion sans autorisation préalable est strictement interdite.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">4. Responsabilité</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Guillaume Chary ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter de l’utilisation ou de l’impossibilité d’utiliser ce site. Les informations fournies sont à titre indicatif et n'engagent pas la responsabilité de l’éditeur.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">5. Données personnelles</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Les données personnelles recueillies sur ce site sont destinées uniquement à l’usage de Guillaume Chary. Conformément à la réglementation, vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez contacter <a href="mailto:gg.intervention@gmail.com" className="text-blue-600 underline">gg.intervention@gmail.com</a>.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">6. Cookies</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Le site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, ce qui peut toutefois limiter certaines fonctionnalités.
          </p>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-10 text-xs text-gray-500 text-center">
            Dernière mise à jour : mai 2025
          </p>
        </section>
      </PageLayout>
    </DefaultLayout>
  );
}