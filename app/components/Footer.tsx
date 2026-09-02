"use client";

export default function Footer() {
  return (
    <footer className="bg-[#07070a] border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-xs text-white/40 tracking-widest">
          © 2026 Khalil Moughamir · Hébergé par{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-200">Vercel</a>
        </span>
        <a
          href="mailto:khalil.moughamir@gmail.com"
          className="font-mono text-xs text-white/70 tracking-widest hover:text-white transition-colors duration-200"
        >
          khalil.moughamir@gmail.com
        </a>
      </div>
    </footer>
  );
}
