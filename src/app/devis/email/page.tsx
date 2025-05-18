'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDevis } from "../../../context/DevisContext";

export default function Step10() {
  const router = useRouter();
  const { data, updateData } = useDevis();
  const [accepted, setAccepted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleAccept = async () => {
    setAccepted(true);
    updateData({ accepted: true });

    setIsSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, accepted: true }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        console.error("Erreur envoi email :", await res.json());
        alert("Erreur lors de l'envoi de l'email");
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Impossible d'envoyer le mail");
    } finally {
      setIsSending(false);
    }
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
          disabled={isSending || sent}
          className="px-6 py-2 rounded bg-[#E6F4EA] text-[#3A7C4A] hover:bg-[#D0ECD8] transition"
        >
          {isSending ? "Envoi..." : sent ? "Envoyé ✅" : "J'accepte"}
        </button>

        <button
          onClick={handleDecline}
          className="px-6 py-2 rounded bg-[#D98C8C] text-white hover:bg-[#C07272] transition"
        >
          Je n&apos;accepte pas
        </button>
      </div>

      {sent && (
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
