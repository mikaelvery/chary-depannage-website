'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Step10() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleDecline = () => {
    setAccepted(false);
    alert("Vous devez accepter pour continuer.");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-6 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">10</h1>
      <p className="text-gray-700">
        En soumettant ce formulaire, j&apos;accepte que les informations saisies dans ce formulaire soient utilisées pour permettre de me recontacter ou dans le cadre de la relation commerciale qui découle de cette demande.&nbsp;
        <span className="text-[#F56C6C]">*</span>
      </p>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleAccept}
          className="px-6 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition"
        >
          J&apos;accepte
        </button>

        <button
          onClick={handleDecline}
          className="px-6 py-2 rounded bg-[#D98C8C] text-white hover:bg-[#C07272] transition"
        >
          Je n&apos;accepte pas
        </button>
      </div>

      {accepted && (
        <>
          <p className="mt-4 text-[#3A7C4A] font-semibold">
            Merci pour votre validation.
          </p>
          <p className="text-[#000000] font-semibold">
            G &amp; G INTERVENTION vous contactera au plus vite.
          </p>
          <button
            onClick={handleGoHome}
            className="mt-4 px-6 py-2 rounded bg-[#3A7C4A] text-white hover:bg-[#2e5e36] transition self-start"
          >
            Retour à l&apos;accueil
          </button>
        </>
      )}
    </main>
  );
}
