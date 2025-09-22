import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact - GG Intervention Metz | Plombier, Serrurier & Vitrier",
  description:
    "Contactez GG Intervention à Metz pour vos urgences de plomberie, serrurerie, vitrerie et dépannage multiservices. Intervention rapide dans un rayon de 50 km, devis gratuit.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ggintervention.fr/contact",
  },
  openGraph: {
    title: "Contact - GG Intervention Metz",
    description:
      "Besoin d’un dépannage rapide en plomberie, serrurerie ou vitrerie à Metz ? Contactez GG Intervention dès maintenant, devis gratuit en ligne.",
    url: "https://ggintervention.fr/contact",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <DefaultLayout>
      <PageLayout title="Contact">
        <main className="max-w-3xl mx-auto px-6 py-4">
          <ContactForm />
        </main>
      </PageLayout>
    </DefaultLayout>
  );
}
