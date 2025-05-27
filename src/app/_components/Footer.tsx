export default function Footer() {
  return (
    <footer className="bg-[#08111b] text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center gap-2 sm:gap-0">
        <span>© 2025 Guillaume Chary - Tous droits réservés</span>
        <span>
          Ce site est une réalisation de{" "}
          <a
            href="https://www.mikaelvery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            Mikael Very
          </a>
        </span>
      </div>
    </footer>
  );
}
