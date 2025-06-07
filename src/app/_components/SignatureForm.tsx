"use client";

import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { collection, query, where, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSearchParams } from "next/navigation";
import PageLayout from "./PageLayout";
import DefaultLayout from "./DefaultLayout";

export default function SignatureForm() {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true); // pour attendre la vérification
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

        if (data.isSigned === true) {
          setIsSigned(true);
        }
      }

      setChecking(false); // on a fini de checker
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
    console.log("Numéro de devis:", numero);

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
      const ref = docSnap.ref;

      const canvas = sigCanvas.current.getCanvas();
      const signatureDataUrl = canvas.toDataURL("image/png");
      console.log("Signature capturée :", signatureDataUrl.substring(0, 30) + "...");

      await updateDoc(ref, {
        isSigned: true,
        signatureUrl: signatureDataUrl,
        signedAt: serverTimestamp(),
        isRead: false,
      });

      console.log("Document mis à jour avec succès.");
      setIsSigned(true);
    } catch (error: any) {
      console.error("Erreur Firestore:", error);
      alert("Erreur lors de la validation: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <PageLayout title="Signature Devis">
        <section className="space-y-6 text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">
          {checking ? (
            <p className="text-center">Chargement...</p>
          ) : isSigned ? (
            <p className="text-green-600 font-bold text-lg text-center">
              ✅ Vous avez déjà signé ce devis. GG Intervention vous recontactera au plus vite.
            </p>
          ) : (
            <>
              <p className="text-center">Veuillez signer ci-dessous pour valider ce devis.</p>
              <SignatureCanvas
                ref={sigCanvas}
                canvasProps={{
                  className: "border border-gray-300 w-full h-40 rounded-md",
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
