'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Step9() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handlePass = () => {
    router.push("/devis/validation");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">9</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">Numéro de téléphone</span>
      </h1>

      <input
        type="tel"
        placeholder="Tapez votre réponse ici"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 max-w-xl w-full"
      />

      <div className="flex items-center gap-4 self-start">
        <button
          className="text-sm px-4 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition"
          onClick={handlePass}
        >
          Passer
        </button>
        <p className="text-sm text-gray-500">Appuyer Entrer ↵</p>
      </div>
    </main>
  );
}
