'use client';

import Image from "next/image";
import CardOption from "app/_components/CardOption";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../context/DevisContext";

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

export default function Step1() {
  const router = useRouter();
  const { updateData } = useDevis();

  const handleSelect = (type: "particulier" | "entreprise") => {
    updateData({ typeClient: type });
    router.push("/devis/projet");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">1</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">Qui êtes-vous ?</span>
        <span className="text-[#F56C6C]">*</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <CardOption
          icon={
            <Image
              src="/icons/man.png"
              alt="Particulier"
              width={64}
              height={64}
              className="object-contain"
            />
          }
          title="Particulier"
          onClick={() => handleSelect("particulier")}
        />
        <CardOption
          icon={
            <Image
              src="/icons/skyscrapers.png"
              alt="Entreprise"
              width={64}
              height={64}
              className="object-contain"
            />
          }
          title="Entreprise"
          onClick={() => handleSelect("entreprise")}
        />
      </div>
    </main>
  );
}
