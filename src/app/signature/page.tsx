import { Suspense } from "react";
import SignatureForm from "../_components/SignatureForm";

export default function SignaturePage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Chargement de la signature...</div>}>
      <SignatureForm />
    </Suspense>
  );
}
