'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";
import StepHeader from "../../_components/StepHeader";

export default function Step9() {
  const router = useRouter();
  const { data, updateData } = useDevis();
  const [phone, setPhone] = useState(data.telephone || "");
  const isValid = /^0\d{9}$/.test(phone);

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={9} question="Votre numéro de téléphone" required={false} />
      <input type="tel" placeholder="06 00 00 00 00" value={phone}
        onChange={(e) => { setPhone(e.target.value); updateData({ telephone: e.target.value }); }}
        onKeyDown={(e) => { if (e.key === 'Enter') router.push("/devis/validation"); }}
        className="p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200 max-w-xl w-full" />
      <div className="flex gap-3">
        <button onClick={() => router.push("/devis/validation")}
          className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-[#7A7570] hover:text-white text-sm transition-all duration-200">
          Passer
        </button>
        {isValid && (
          <button onClick={() => router.push("/devis/validation")}
            className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold text-sm transition-all duration-200">
            Suivant →
          </button>
        )}
      </div>
    </main>
  );
}