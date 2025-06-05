"use client";

import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSearchParams } from "next/navigation";
import PageLayout from "./PageLayout";
import DefaultLayout from "./DefaultLayout";

export default function SignatureForm() {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const numero = searchParams.get("numero");

  const handleValidate = async () => {
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
      return alert("Veuillez signer avant de valider.");
    }

    if (!numero) {
      return alert("Aucun numéro de devis trouvé dans l'URL.");
    }

    setLoading(true);

    try {
      const canvas = sigCanvas.current.getCanvas(); 
      const signatureDataUrl = canvas.toDataURL("image/png");
      console.log(signatureDataUrl)

      const ref = doc(db, "devis", numero);
      await updateDoc(ref, {
        isSigned: true,
        signatureUrl: signatureDataUrl,
        signedAt: serverTimestamp(),
      });

      setIsSigned(true);
    } catch (error) {
      console.error("Erreur Firestore:", error);
      alert("Erreur lors de la validation.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <DefaultLayout>
      <PageLayout title="Signature Devis">
      <section className="space-y-6 text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">
        {isSigned ? (
          <p className="text-green-600 font-bold text-lg text-center">
            Merci, le devis a bien été signé ✅
          </p>
        ) : (
          <>
            <p className="text-center">Veuillez signer ci-dessous pour valider ce devis.</p>
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                className: "border border-gray-300 w-full h-40 rounded-md"
              }}
              backgroundColor="#fff"
              penColor="#000"
            />
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleValidate}
                disabled={loading}
              >
                {loading ? "Envoi..." : "Valider la signature"}
              </button>
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                onClick={() => sigCanvas.current?.clear()}
              >
                Effacer
              </button>
            </div>
          </>
        )}
      </section>
      </PageLayout>
    </DefaultLayout>
  );
}
