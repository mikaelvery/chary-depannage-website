'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";
import StepHeader from "../../_components/StepHeader";

export default function Step6() {
  const router = useRouter();
  const { updateData } = useDevis();
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const isValid = ville.trim().length > 0 && /^\d{5}$/.test(codePostal.trim());

  const handleSubmit = () => {
    if (isValid) { updateData({ ville, codePostal }); router.push('/devis/nom'); }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValid) handleSubmit();
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={6} question="Dans quel secteur se trouve le chantier ?" />
      <div className="flex flex-col gap-5 max-w-xl w-full">
        <label>
          <span className="block text-[#7A7570] text-xs font-medium uppercase tracking-widest mb-2">Ville</span>
          <input type="text" placeholder="Ex : Metz" value={ville}
            onChange={(e) => setVille(e.target.value)} onKeyDown={handleKeyDown}
            className="w-full p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200" />
        </label>
        <label>
          <span className="block text-[#7A7570] text-xs font-medium uppercase tracking-widest mb-2">Code postal</span>
          <input type="text" placeholder="Ex : 57000" value={codePostal} maxLength={5}
            onChange={(e) => setCodePostal(e.target.value)} onKeyDown={handleKeyDown}
            className="w-full p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200" />
        </label>
      </div>
      <button onClick={handleSubmit} disabled={!isValid}
        className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 self-start">
        Suivant →
      </button>
    </main>
  );
}
