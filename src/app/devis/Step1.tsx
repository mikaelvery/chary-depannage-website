
'use client';
import Image from "next/image";
import CardOption from "../_components/CardOption";
import StepHeader from "../_components/StepHeader";
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
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={1} question="Qui êtes-vous ?" />
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <CardOption
          icon={<Image src="/icons/man.png" alt="Particulier" width={64} height={64} />}
          title="Particulier"
          onClick={() => handleSelect("particulier")}
        />
        <CardOption
          icon={<Image src="/icons/skyscrapers.png" alt="Entreprise" width={64} height={64} />}
          title="Entreprise"
          onClick={() => handleSelect("entreprise")}
        />
      </div>
    </main>
  );
}