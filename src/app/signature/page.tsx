import { Suspense } from "react";
import SignatureForm from "app/_components/SignatureForm";

export const metadata = {
  robots: "noindex, nofollow",
  title: "Signature - GG Intervention",
};

export default function SignaturePage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Chargement de la signature...</div>}>
      <SignatureForm />
    </Suspense>
  );
}
