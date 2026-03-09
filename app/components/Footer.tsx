"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a1020] border-t border-[#1a2744] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-xs text-[#2d4a7a] tracking-widest">
          © 2025 Khalil Moughamir — Hébergé par{" "}
          <span className="text-[#fbbf24]">Vercel</span>
        </span>
        <a
          href="mailto:khalil.moughamir@gmail.com"
          className="font-mono text-xs text-[#2d4a7a] tracking-widest hover:text-[#fbbf24] transition-colors duration-200"
        >
          khalil.moughamir@gmail.com
        </a>
      </div>
    </footer>
  );
}
