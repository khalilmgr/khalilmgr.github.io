"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f0] border-t border-[#d9c7a3]/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-xs text-[#a8b0b5] tracking-widest">
          © 2026 Khalil Moughamir · Hébergé par{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#1e5f8c] hover:text-[#1c2f4a] transition-colors duration-200">Vercel</a>
        </span>
        <a
          href="mailto:khalil.moughamir@gmail.com"
          className="font-mono text-xs text-[#1e5f8c] tracking-widest hover:text-[#1c2f4a] transition-colors duration-200"
        >
          khalil.moughamir@gmail.com
        </a>
      </div>
    </footer>
  );
}
