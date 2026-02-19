import LegalLayout from "../_components/LegalLayout";

export const metadata = {
  title: "Mentions légales | GG Intervention Metz",
  description: "Mentions légales du site GG Intervention Metz.",
  robots: "noindex, follow",
  alternates: { canonical: "https://ggintervention.fr/mentions-legales" },
};

export default function LegalNotice() {
  return (
    <LegalLayout title="Mentions légales">
      <div>
        <h2 className="text-white font-bold text-base mb-3">1. Présentation du site</h2>
        <p>En application de l'article 6 de la loi n° 2004-575 du 21 juin 2004, voici les intervenants du site <strong className="text-[#F0EDE8]">https://ggintervention.fr</strong> :</p>
        <ul className="mt-3 space-y-1 ml-4 list-disc">
          <li><strong className="text-[#F0EDE8]">Propriétaire / Éditeur :</strong> Guillaume Chary – Micro-entrepreneur</li>
          <li><strong className="text-[#F0EDE8]">Email :</strong> <a href="mailto:gg.intervention@gmail.com" className="text-[#F4500A] hover:underline">gg.intervention@gmail.com</a></li>
          <li><strong className="text-[#F0EDE8]">Hébergeur :</strong> Vercel Inc.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">2. Conditions d'utilisation</h2>
        <p>L'utilisation du site implique l'acceptation pleine et entière des présentes conditions. Le site est accessible en permanence sauf en cas de maintenance ou force majeure.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">3. Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de Guillaume Chary et protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">4. Responsabilité</h2>
        <p>Guillaume Chary ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site. Les informations fournies sont à titre indicatif.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">5. Données personnelles</h2>
        <p>Les données personnelles recueillies sont destinées uniquement à l'usage de Guillaume Chary. Vous disposez d'un droit d'accès, de modification et de suppression en contactant <a href="mailto:gg.intervention@gmail.com" className="text-[#F4500A] hover:underline">gg.intervention@gmail.com</a>.</p>
      </div>
      <p className="text-xs text-[#7A7570]/60 text-center pt-4">Dernière mise à jour : mai 2025</p>
    </LegalLayout>
  );
}