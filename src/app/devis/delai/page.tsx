'use client';

import Image from "next/image";
import CardOption from "../../_components/CardOption";
import { ArrowRight } from "lucide-react";
import { useDevis } from "../../../context/DevisContext";
import { useRouter } from "next/navigation";

export default function Step3() {
  const { updateData } = useDevis();
  const router = useRouter();

  const options = [
    { title: "Urgent", img: "/icons/chrono.png" },
    { title: "1 mois", img: "/icons/1month.png" },
    { title: "3 mois", img: "/icons/3month.png" },
    { title: "6 mois", img: "/icons/6month.png" },
  ];

  const handleSelect = (urgence: string) => {
    updateData({ urgence });
    router.push("/devis/description");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">3</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">
          Quand souhaitez-vous que les travaux commencent ?
        </span>
        <span className="text-[#F56C6C]">*</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
        {options.map((option) => (
          <CardOption
            key={option.title}
            title={option.title}
            icon={
              <Image
                src={option.img}
                alt={option.title}
                width={64}
                height={64}
                className="object-contain"
              />
            }
            onClick={() => handleSelect(option.title)}
          />
        ))}
      </div>
    </main>
  );
}
