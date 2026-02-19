'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDevis } from "../../../context/DevisContext";
import StepHeader from "../../_components/StepHeader";

export default function Step10() {
  const router = useRouter();
  const { data, updateData } = useDevis();
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAccept = async () => {
    setError(""); setIsSubmitting(true);
    try {
      updateData({ accepted: true });
      const response = await fetch("/api/send-mail", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, accepted: true }),
      });
      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      setAccepted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="flex flex-col justify-center min-h-screen gap-8 px-4 max-w-4xl mx-auto py-12">
      <StepHeader step={10} question="Dernière étape — validation" />
      {!accepted ? (
        <>
          <p className="text-[#7A7570] text-sm max-w-xl leading-relaxed -mt-4">
            En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées
            pour me recontacter dans le cadre de la relation commerciale.
            <span className="text-[#F4500A] ml-1">*</span>
          </p>
          <div className="flex gap-3 flex-wrap">
            <button onClick={handleAccept} disabled={isSubmitting}
              className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] disabled:opacity-50 text-white font-semibold text-sm transition-all duration-200">
              {isSubmitting ? "Envoi en cours..." : "J'accepte et j'envoie →"}
            </button>
            <button onClick={() => alert("Vous devez accepter pour continuer.")}
              className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-[#7A7570] hover:text-white text-sm transition-all duration-200">
              Je refuse
            </button>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </>
      ) : (
        <div className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 max-w-xl">
          <div className="w-12 h-12 rounded-full bg-[#F4500A]/15 flex items-center justify-center text-2xl mb-5">✅</div>
          <h2 className="text-white font-black text-xl mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            Demande envoyée !
          </h2>
          <p className="text-[#7A7570] text-sm leading-relaxed mb-6">
            GG Intervention vous recontactera au plus vite au numéro ou email fourni.
          </p>
          <button onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] text-white font-semibold text-sm transition-all duration-200">
            Retour à l'accueil
          </button>
        </div>
      )}
    </main>
  );
}