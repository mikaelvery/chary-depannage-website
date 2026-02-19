'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";
import StepHeader from "../../_components/StepHeader";

export default function Step7() {
  const router = useRouter();
  const { data, updateData } = useDevis();
  const [prenom, setPrenom] = useState(data.prenom || "");
  const [nom, setNom] = useState(data.nom || "");
  const isValid = prenom.trim().length > 0 && nom.trim().length > 0;

  const handleSubmit = () => {
    if (isValid) { updateData({ prenom, nom }); router.push("/devis/email"); }
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={7} question="Votre prénom et nom" />
      <div className="flex flex-col gap-4 max-w-xl w-full">
        <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)}
          className="p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200" />
        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)}
          className="p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200" />
      </div>
      {isValid && (
        <button onClick={handleSubmit}
          className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold text-sm transition-all duration-200 self-start">
          Suivant →
        </button>
      )}
    </main>
  );
}