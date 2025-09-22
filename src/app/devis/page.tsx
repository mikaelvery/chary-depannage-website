import Step1 from "./Step1";

export const metadata = {
  title: "Demande de devis - Étape 1 | GG Intervention Metz",
  description:
    "Choisissez si vous êtes un particulier ou une entreprise pour commencer votre demande de devis en plomberie, serrurerie, vitrerie ou multiservices avec GG Intervention à Metz.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://ggintervention.fr/devis",
  },
  openGraph: {
    title: "Demande de devis - Étape 1 | GG Intervention Metz",
    description:
      "Commencez votre demande de devis avec GG Intervention Metz. Sélectionnez particulier ou entreprise avant de préciser votre projet.",
    url: "https://ggintervention.fr/devis",
    siteName: "GG Intervention",
    type: "website",
  },
};

export default function DevisPage() {
  return <Step1 />;
}
