'use client';
import Image from "next/image";
import CardOption from "../../_components/CardOption";
import StepHeader from "../../_components/StepHeader";
import { useDevis } from "../../../context/DevisContext";

export default function Step2() {
  const { updateData } = useDevis();
  const options = [
    { title: "Portes", img: "/icons/door.png" },
    { title: "Serrurerie", img: "/icons/lock.png" },
    { title: "Plomberie", img: "/icons/plumbing.png" },
  ];
  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={2} question="Que souhaitez-vous faire ?" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {options.map((option) => (
          <CardOption key={option.title} title={option.title} href="/devis/delai"
            onClick={() => updateData({ typeProjet: option.title })}
            icon={<Image src={option.img} alt={option.title} width={64} height={64} className="object-contain" />}
          />
        ))}
      </div>
    </main>
  );
}