'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext"; 

export default function Step6() {
  const router = useRouter();
  const { updateData } = useDevis();

  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const isValidPostalCode = (code: string) => /^\d{5}$/.test(code.trim());
  const isValid = ville.trim().length > 0 && isValidPostalCode(codePostal);

  const handleSubmit = () => {
    if (isValid) {
      updateData({ ville, codePostal });
      router.push('/devis/nom');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValid) {
      handleSubmit();
    }
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">6</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">
          Dans quel secteur géographique se trouve le chantier ?
        </span>
        <span className="text-[#F56C6C]">*</span>
      </h1>

      <label className="self-start w-full max-w-xl">
        <span className="block mb-1 font-medium text-gray-700">Ville</span>
        <input
          type="text"
          placeholder="Entrez la ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </label>

      <label className="self-start w-full max-w-xl mt-4">
        <span className="block mb-1 font-medium text-gray-700">Code postal</span>
        <input
          type="text"
          placeholder="Entrez le code postal"
          value={codePostal}
          onChange={(e) => setCodePostal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
          maxLength={5}
        />
      </label>

      <div className="flex items-center gap-4 self-start mt-4">
        <button
          className="text-sm px-4 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!isValid}
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
