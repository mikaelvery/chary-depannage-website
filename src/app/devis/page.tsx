'use client';

import Image from "next/image";
import CardOption from "app/_components/CardOption";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../context/DevisContext";

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
