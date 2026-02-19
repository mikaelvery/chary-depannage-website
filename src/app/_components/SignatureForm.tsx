"use client";

import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { collection, query, where, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSearchParams } from "next/navigation";
import LegalLayout from "../_components/LegalLayout";

export default function SignatureForm() {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const searchParams = useSearchParams();
  const numero = searchParams.get("numero");

  useEffect(() => {
    const checkIfAlreadySigned = async () => {
      if (!numero) return;
      const devisRef = collection(db, "devis");
      const q = query(devisRef, where("devisId", "==", numero));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        const data = docSnap.data();
        if (data.isSigned === true) setIsSigned(true);
      }
      setChecking(false);
    };
    checkIfAlreadySigned();
  }, [numero]);

  const handleValidate = async () => {
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
      return alert("Veuillez signer avant de valider.");
    }
    if (!numero) {
      return alert("Aucun numéro de devis trouvé dans l'URL.");
    }
    setLoading(true);
    try {
      const devisRef = collection(db, "devis");
      const q = query(devisRef, where("devisId", "==", numero));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert("Aucun devis trouvé avec ce numéro.");
        setLoading(false);
        return;
      }
      const docSnap = querySnapshot.docs[0];
      const canvas = sigCanvas.current.getCanvas();
      const signatureDataUrl = canvas.toDataURL("image/png");
      await updateDoc(docSnap.ref, {
        isSigned: true,
        signatureUrl: signatureDataUrl,
        signedAt: serverTimestamp(),
        isRead: false,
        userId: "UUID_USER",
        message: `Le devis ${numero} a été signé.`,
      });
      setIsSigned(true);
    } catch (error: any) {
      console.error("Erreur Firestore:", error);
      alert("Erreur lors de la validation: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LegalLayout title="Signature du devis">
      {checking ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-6 h-6 border-2 border-[#F4500A] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isSigned ? (
        <div className="bg-[#1A1A1A] border border-white/8 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-[#F4500A]/15 flex items-center justify-center text-2xl mx-auto mb-4">
            ✅
          </div>
          <h2 className="text-white font-black text-lg mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            Devis déjà signé
          </h2>
          <p className="text-[#7A7570] text-sm">
            Vous avez déjà signé ce devis. GG Intervention vous recontactera au plus vite.
          </p>
        </div>
      ) : (
        <div className="space-y-6 max-w-xl">
          <p className="text-[#7A7570] text-sm">
            Signez ci-dessous pour valider le devis n°{" "}
            <span className="text-[#F0EDE8] font-medium">{numero}</span>.
          </p>

          {/* Zone de signature */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                className: "w-full h-48 block",
                style: { touchAction: "none" },
              }}
              backgroundColor="#ffffff"
              penColor="#000000"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleValidate}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-[#F4500A] hover:bg-[#FF6B2B] disabled:opacity-50 text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              {loading ? "Envoi..." : "Valider la signature →"}
            </button>
            <button
              onClick={() => sigCanvas.current?.clear()}
              className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-[#7A7570] hover:text-white text-sm transition-all duration-200 cursor-pointer"
            >
              Effacer
            </button>
          </div>
        </div>
      )}
    </LegalLayout>
  );
}