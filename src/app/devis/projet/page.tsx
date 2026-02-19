'use client';

import Image from "next/image";
import CardOption from "../../_components/CardOption";
import { ArrowRight } from "lucide-react";
import { useDevis } from "../../../context/DevisContext";

export default function Step2() {
  const { updateData } = useDevis();

  const options = [
    { title: "Portes", img: "/icons/door.png" },
    { title: "Serrurerie", img: "/icons/lock.png" },
    { title: "Plomberie", img: "/icons/plumbing.png" },
  ];

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">2</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">Que souhaitez-vous faire ?</span>
        <span className="text-[#F56C6C]">*</span>
      </h1>      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {options.map((option) => (
          <CardOption
            key={option.title}
            title={option.title}
            href="/devis/delai"
            onClick={() => updateData({ typeProjet: option.title })}
            icon={
              <Image
                src={option.img}
                alt={option.title}
                width={64}
                height={64}
                className="object-contain"
              />
            }
          />
        ))}
      </div>
    </main>
  );
}
