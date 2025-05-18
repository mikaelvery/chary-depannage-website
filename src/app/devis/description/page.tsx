'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";

export default function Step4() {
  const [description, setDescription] = useState("");
  const { updateData } = useDevis();
  const router = useRouter();

  const handleNext = () => {
    updateData({ description });
    router.push("/devis/budget");
  };

  const handleSkip = () => {
    router.push("/devis/budget");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">4</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">
          Pouvez-vous nous en dire plus sur votre projet ?
        </span>
        <span className="text-[#F56C6C]">*</span>
      </h1>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-48 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Parlez-nous de votre projet..."
      />

      <div className="flex items-center gap-4 self-start">
        <button
          className="text-sm px-4 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition"
          onClick={handleSkip}
        >
          Passer
        </button>
        <button
          className="text-sm px-4 py-2 rounded bg-[#3A7C4A] text-white hover:bg-[#2f6e40] transition"
          onClick={handleNext}
        >
          Suivant
        </button>
        <p className="text-sm text-gray-500">
          Maj ⇧ + Entrée ↵ pour effectuer un saut de ligne.
        </p>
      </div>
    </main>
  );
}
