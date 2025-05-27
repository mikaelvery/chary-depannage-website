import { Header, CompanyDetails , Footer } from "../../app/_components";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/50 text-gray-900 max-w-screen overflow-x-hidden">
        <Header />
            <main>{children}</main>
        <CompanyDetails />
        <Footer />
    </div>
  );
}
