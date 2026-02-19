import Link from "next/link";

interface CardOptionProps {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function CardOption({ title, icon, href, onClick }: CardOptionProps) {
  const content = (
    <div
      onClick={onClick}
      className="group w-full bg-[#1A1A1A] border border-white/8 hover:border-[#F4500A]/40 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40 flex flex-col items-center gap-4"
    >
      {icon && (
        <div className="w-16 h-16 rounded-xl bg-[#F4500A]/10 group-hover:bg-[#F4500A]/20 flex items-center justify-center transition-colors duration-200">
          <div className="brightness-0 invert opacity-80">
            {icon}
          </div>
        </div>
      )}
      <h3
        className="text-white font-bold text-base text-center"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>
    </div>
  );

  return href ? (
    <Link href={href} className="w-full sm:w-auto">
      {content}
    </Link>
  ) : (
    <div className="w-full sm:w-auto">{content}</div>
  );
}