import Head from 'next/head';
import {
  Header,
  Footer,
  CompanyDetails,
  Hero,
  About,
  Services,
  RealisationsSection,
  Contact,
  AvisGoogle
} from './_components';


export default function Home() {
  return (
    <>
      <Head>
        <title>G&G Intervention - Plombier à Metz</title>
        <meta name="description" content="Intervention rapide pour plomberie, chauffage, serrurerie à Metz et alentours. Disponible 24h/24." />
      </Head>
      <div className="bg-white text-gray-900">
        <main className="max-w-6xl mx-auto">
          <Header />
          <Hero />
          <About />
          <Services />  
          <RealisationsSection />        
          <Contact />  
          <AvisGoogle />        
        </main>
        <CompanyDetails />      
        <Footer />
      </div>
    </>
  );
}

