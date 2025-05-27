import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";

export default function TermsOfService() {
  return (
    <DefaultLayout>
      <PageLayout title="Conditions Générales de Vente (C.G.V.)">
        <section className="space-y-6 text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">
          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            1. Absence de prestations commerciales
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Ce site internet ne propose actuellement aucune vente de produit ou de service en ligne. Il a pour but la présentation d’activités ou de projets.
          </p>

          <h2 data-aos="fade-up" className="text-xl font-semibold mb-4">
            2. C.G.V. non applicables
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            En l’absence d’offre commerciale ou de transaction, aucune condition générale de vente n’est applicable à ce jour. Si cela venait à changer, les C.G.V. seraient publiées et disponibles sur cette page.
          </p>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-10 text-xs text-gray-500 text-center">
            Dernière mise à jour : mai 2025
          </p>
        </section>
      </PageLayout>
    </DefaultLayout>
    
  );
}
