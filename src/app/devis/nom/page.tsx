'use client';

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext"; 

export default function Step7() {
  const router = useRouter();
  const { data, updateData } = useDevis(); 

  const [prenom, setPrenom] = useState(data.prenom || "");
  const [nom, setNom] = useState(data.nom || "");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(prenom.trim().length > 0 && nom.trim().length > 0);
  }, [prenom, nom]);

  const handleSubmit = () => {
    if (isValid) {
      updateData({ prenom, nom }); 
      router.push("/devis/email");
    }
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">7</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">Prénom <span className="text-[#F56C6C]">*</span></span>
        <span> &amp; </span>
        <span className="text-[#191919]">Nom <span className="text-[#F56C6C]">*</span></span>
      </h1>

      <div className="flex flex-col gap-4 max-w-xl w-full">
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>

      {isValid && (
        <button
          className="mt-4 px-6 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition self-start"
          onClick={handleSubmit}
        >
          Ok
        </button>
      )}

      <p className="text-sm text-gray-500 self-start mt-2">Appuyer Entrer ↵</p>
    </main>
  );
}
