"use client";

import { useEffect } from "react";
import { CloseIcon, DownloadIcon } from "./icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export function Modal({ isOpen, onClose, pdfUrl, title = "PLAYER RESUME" }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
      style={{ overscrollBehavior: "contain" }}
    >
      <div
        className="relative w-full max-w-5xl h-[85vh] bg-[#060813] border border-[var(--neon-cyan)]/20 shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: "4px", overscrollBehavior: "contain" }}
      >
        {/* Corner Cyber Decorators */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--neon-cyan)]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--neon-cyan)]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--neon-cyan)]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--neon-cyan)]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--neon-cyan)] text-xs font-mono">◇</span>
            <h3
              className="text-white text-sm font-semibold tracking-[0.15em] uppercase font-mono"
              style={{ fontFamily: "var(--font-theme-mono)" }}
            >
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Resume_Tarathep_Butka.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 hover:border-[var(--neon-cyan)] text-gray-400 hover:text-[var(--neon-cyan)] text-xs font-medium transition-all duration-300 uppercase font-mono"
              style={{ fontFamily: "var(--font-theme-mono)" }}
              title="Download Resume"
            >
              <DownloadIcon size={14} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded border border-white/10 hover:border-red-500 text-gray-400 hover:text-red-500 transition-all duration-300"
              aria-label="Close modal"
            >
              <CloseIcon size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content - PDF Preview iframe */}
        <div 
          className="flex-1 bg-black/40 overflow-hidden relative"
          style={{ overscrollBehavior: "contain" }}
        >
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full border-none"
            title="Resume PDF Preview"
            style={{ overscrollBehavior: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
