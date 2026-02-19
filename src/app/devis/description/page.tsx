'use client';
import { useState } from "react";
import StepHeader from "../../_components/StepHeader";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";

export default function Step4() {
  const [description, setDescription] = useState("");
  const { updateData } = useDevis();
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={4} question="Dites-nous en plus sur votre projet" required={false} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-48 p-5 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl resize-none text-[#F0EDE8] placeholder-[#7A7570] text-sm leading-relaxed focus:outline-none transition-colors duration-200"
        placeholder="Parlez-nous de votre projet..."
      />
      <div className="flex items-center gap-4">
        <button onClick={() => router.push("/devis/budget")}
          className="text-sm px-5 py-3 rounded-xl border border-white/10 hover:border-white/25 text-[#7A7570] hover:text-white transition-all duration-200">
          Passer
        </button>
        <button onClick={() => { updateData({ description }); router.push("/devis/budget"); }}
          className="text-sm px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold transition-all duration-200">
          Suivant →
        </button>
        <p className="text-xs text-[#7A7570]">Maj ⇧ + Entrée ↵ pour un saut de ligne</p>
      </div>
    </main>
  );
}