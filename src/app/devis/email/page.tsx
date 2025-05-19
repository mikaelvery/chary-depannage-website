'use client'

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";

export default function Step8() {
  const router = useRouter();
  const { updateData } = useDevis();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email.trim()));
  }, [email]);

  const handleSubmit = () => {
    if (isValid) {
      updateData({ email }); 
      router.push("/devis/telephone");
    }
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold flex items-center gap-2 self-start">
        <span className="text-[#667663]">8</span>
        <ArrowRight className="w-5 h-5 text-[#667663]" />
        <span className="text-[#191919]">
          Email <span className="text-[#F56C6C]">*</span>
        </span>
      </h1>

      <input
        type="email"
        placeholder="Tapez votre réponse ici"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 max-w-xl w-full"
        required
      />

      {isValid && (
        <div className="mt-4 flex items-center gap-4 self-start">
          <button
            className="px-6 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition"
            onClick={handleSubmit}
          >
            Ok
          </button>
          <p className="text-sm text-gray-500">Appuyez sur Entrée pour valider ↵</p>
        </div>
      )}
    </main>
  );
}
