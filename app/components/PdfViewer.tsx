"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function PdfViewer({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;

    async function render() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const doc = await pdfjsLib.getDocument(url).promise;
        if (cancelled || !container) return;
        setPageCount(doc.numPages);

        for (let i = 1; i <= doc.numPages; i++) {
          if (cancelled) return;
          const page = await doc.getPage(i);
          const viewport = page.getViewport({ scale: 1.6 });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.className = "w-full h-auto rounded-lg shadow-2xl";
          canvas.oncontextmenu = (e) => e.preventDefault();

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport }).promise;
          if (cancelled) return;

          container.appendChild(canvas);
          if (i === 1) setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    render();
    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, [url]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex flex-col"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#07070a]">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f5f5f7] truncate">{title}</p>
            {pageCount > 0 && (
              <p className="font-mono text-[10px] text-white/40 tracking-widest mt-0.5">
                {pageCount} {lang === "fr" ? "pages" : "pages"}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.06] text-white/60 hover:text-white text-xs font-mono uppercase tracking-wide transition-all duration-200"
          >
            {lang === "fr" ? "Fermer" : "Close"}
            <span>✕</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-8 select-none">
          {loading && !error && (
            <div className="flex items-center justify-center h-full">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                {lang === "fr" ? "Chargement..." : "Loading..."}
              </span>
            </div>
          )}
          {error && (
            <div className="flex items-center justify-center h-full">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                {lang === "fr" ? "Impossible de charger le document." : "Couldn't load the document."}
              </span>
            </div>
          )}
          <div ref={containerRef} className="max-w-3xl mx-auto flex flex-col gap-6" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
