import LegalLayout from "../_components/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <div>
        <h2 className="text-white font-bold text-base mb-3">1. Absence de prestations commerciales en ligne</h2>
        <p>Ce site internet ne propose actuellement aucune vente de produit ou de service en ligne. Il a pour but la présentation des activités de GG Intervention.</p>
      </div>
      <div>
        <h2 className="text-white font-bold text-base mb-3">2. C.G.V. non applicables</h2>
        <p>En l'absence d'offre commerciale ou de transaction en ligne, aucune condition générale de vente n'est applicable à ce jour. Si cela venait à changer, les C.G.V. seraient publiées sur cette page.</p>
      </div>
      <p className="text-xs text-[#7A7570]/60 text-center pt-4">Dernière mise à jour : mai 2025</p>
    </LegalLayout>
  );
}