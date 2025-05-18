'use client';

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Step8() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email.trim()));
  }, [email]);

  const handleSubmit = () => {
    if (isValid) {
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
