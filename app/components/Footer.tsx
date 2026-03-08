"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1020] border-t border-[#1a2744] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#2d4a7a] tracking-widest uppercase">
          © {year} — Khalil Moughamir
        </span>
        <span className="font-mono text-xs text-[#2d4a7a] tracking-widest uppercase">
          Built with{" "}
          <span className="text-[#fbbf24]">Next.js</span> &{" "}
          <span className="text-[#fbbf24]">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}
