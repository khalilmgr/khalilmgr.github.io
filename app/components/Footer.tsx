"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a1020] border-t border-[#1a2744] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-xs text-white tracking-widest">
          © 2026 Khalil Moughamir — Hébergé par{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#fbbf24] hover:underline">Vercel</a>
        </span>
        <a
          href="mailto:khalil.moughamir@gmail.com"
          className="font-mono text-xs text-[#fbbf24] tracking-widest hover:text-white transition-colors duration-200"
        >
          khalil.moughamir@gmail.com
        </a>
      </div>
    </footer>
  );
}
