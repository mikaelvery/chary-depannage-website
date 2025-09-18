import SignatureForm from "app/_components/SignatureForm";
import Head from "next/head";
import { Suspense } from "react";

export default function SignaturePage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Suspense fallback={<div className="text-center mt-10">Chargement de la signature...</div>}>
        <SignatureForm />
      </Suspense>
    </>
  );
}
