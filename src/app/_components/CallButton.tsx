import { FaPhone } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:0760432122"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#0D1B2A]  text-white px-5 py-3 rounded-full shadow-lg transition-all md:hidden"
      aria-label="Appeler le 07 60 43 21 22"
    >
      <FaPhone className="w-5 h-5" />
      <span className="font-semibold text-sm">Appeler</span>
    </a>
  );
}
