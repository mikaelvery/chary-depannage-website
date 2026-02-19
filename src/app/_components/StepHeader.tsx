"use client";

import { useRouter } from "next/navigation";

interface StepHeaderProps {
  step: number;
  total?: number;
  question: string;
  required?: boolean;
}

export default function StepHeader({ step, total = 10, question, required = true }: StepHeaderProps) {
  const router = useRouter();

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Barre de progression */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-[#7A7570] hover:text-white transition-all duration-200 cursor-pointer shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <div className="flex-1 h-1 bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F4500A] rounded-full transition-all duration-500"
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>
        <span className="text-[#7A7570] text-xs shrink-0">{step}/{total}</span>
      </div>

      {/* Question */}
      <h1
        className="text-white font-black leading-[1.1] tracking-tight mb-2"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(22px, 4vw, 36px)",
          letterSpacing: "-0.02em",
        }}
      >
        {question}
        {required && <span className="text-[#F4500A] ml-1">*</span>}
      </h1>
    </div>
  );
}