import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";
import RealisationsGallery from "./RealisationsGallery";

export const metadata = {
  title: "Nos réalisations - GG Intervention Metz | Plomberie, Serrurerie & Vitrerie",
  description:
    "Découvrez les réalisations de GG Intervention à Metz : dépannage en plomberie, serrurerie, vitrerie et multiservices. Exemples de nos interventions rapides et efficaces.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ggintervention.fr/realisations",
  },
  openGraph: {
    title: "Nos réalisations - GG Intervention Metz",
    description:
      "Quelques exemples de nos dépannages en plomberie, serrurerie et vitrerie à Metz et alentours.",
    url: "https://ggintervention.fr/realisations",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <DefaultLayout>
      <PageLayout title="Nos réalisations">
        <main className="bg-gray-100/90 px-6 pt-20 pb-10 relative">
          <RealisationsGallery />
        </main>
      </PageLayout>
    </DefaultLayout>
  );
}
