import LegalLayout from "../_components/LegalLayout";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact - GG Intervention Metz | Plombier, Serrurier & Vitrier",
  description: "Contactez GG Intervention à Metz pour vos urgences. Intervention rapide dans un rayon de 50 km, devis gratuit.",
  robots: "index, follow",
  alternates: { canonical: "https://ggintervention.fr/contact" },
  openGraph: {
    title: "Contact - GG Intervention Metz",
    description: "Besoin d'un dépannage rapide à Metz ? Contactez GG Intervention dès maintenant.",
    url: "https://ggintervention.fr/contact",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <LegalLayout title="Contact">
      <ContactForm />
    </LegalLayout>
  );
}