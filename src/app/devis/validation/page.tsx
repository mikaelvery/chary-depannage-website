'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDevis } from "../../../context/DevisContext";

export default function Step10() {
  const router = useRouter();
  const { data, updateData } = useDevis();
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAccept = async () => {
    setError("");
    setIsSubmitting(true);

    try {
      // Met à jour data avec accepted = true avant l’envoi
      updateData({ accepted: true });

      // Envoi à l’API
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, accepted: true }), // Assure-toi d’envoyer accepted: true aussi
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du mail");
      }

      setAccepted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error(err.message);
      } else {
        setError("Erreur inconnue");
        console.error("Erreur inconnue", err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecline = () => {
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
          disabled={isSubmitting || accepted}
          className={`px-6 py-2 rounded ${
            isSubmitting || accepted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8]"
          } transition`}
        >
          J&apos;accepte
        </button>

        <button
          onClick={handleDecline}
          disabled={isSubmitting || accepted}
          className={`px-6 py-2 rounded ${
            isSubmitting || accepted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#D98C8C] text-white hover:bg-[#C07272]"
          } transition`}
        >
          Je n&apos;accepte pas
        </button>
      </div>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      {accepted && !error && (
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
