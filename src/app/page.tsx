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
import ScrollToTop from './_components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Head>
        <title>G&G Intervention - Plombier à Metz</title>
        <meta name="description" content="Intervention rapide pour plomberie, chauffage, serrurerie à Metz et alentours. Disponible 24h/24." />
      </Head>
      <div className="bg-white/50 text-gray-900">        
          <Header />
          <Hero />
          <About />
          <Services />  
          <RealisationsSection />        
          <Contact />  
          <AvisGoogle /> 
          <CompanyDetails />      
          <Footer />            
          <ScrollToTop />
      </div>
    </>
  );
}

