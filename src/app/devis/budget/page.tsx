'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useDevis } from '../../../context/DevisContext';
import StepHeader from '../../_components/StepHeader';

export default function Step5() {
  const { data, updateData } = useDevis();
  const router = useRouter();
  const [budget, setBudget] = useState(data.budget || '');

  const handleNext = () => {
    updateData({ budget });
    router.push('/devis/localisation');
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={5} question="Quel est votre budget ?" required={false} />
      <p className="text-[#7A7570] text-sm -mt-4">
        Nous ferons le maximum pour nous adapter à votre budget.
      </p>
      <label className="w-full max-w-xl">
        <span className="block text-[#7A7570] text-xs font-medium uppercase tracking-widest mb-2">Budget (€)</span>
        <input
          type="number"
          placeholder="Ex : 500"
          min={0}
          step={100}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-4 bg-[#1A1A1A] border border-white/8 focus:border-[#F4500A]/40 rounded-2xl text-[#F0EDE8] placeholder-[#7A7570] text-sm focus:outline-none transition-colors duration-200"
        />
      </label>
      <div className="flex items-center gap-3">
        <button onClick={handleNext}
          className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-[#7A7570] hover:text-white text-sm transition-all duration-200">
          Passer
        </button>
        <button onClick={handleNext}
          className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold text-sm transition-all duration-200">
          Suivant →
        </button>
      </div>
    </main>
  );
}