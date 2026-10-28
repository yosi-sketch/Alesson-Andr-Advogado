"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "navy"
    | "dark"
    | "white"
    | "emerald"
    | "outline"
    | "outline-dark";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (Polished Metallic Gold, Obsidian Midnight & Slate Navy)
  const variantClasses = {
    // Primary Signature: Polished Metallic Gold & Champagne
    gold:
      "relative border border-[#fef3d6]/90 bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#7a500e] text-white font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(212,157,44,0.48),inset_0_1px_1px_rgba(255,255,255,0.45)] " +
      "hover:-translate-y-0.5 hover:from-[#c58b24] hover:via-[#e5b242] hover:to-[#9e6b15] " +
      "hover:shadow-[0_10px_30px_rgba(229,178,66,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(212,157,44,0.4)]",

    // Secondary Accent: Deep Slate Navy
    navy:
      "relative border border-[#6091f7]/40 bg-gradient-to-r from-[#0a1424] via-[#12233f] to-[#070e1a] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(18,35,63,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] " +
      "hover:-translate-y-0.5 hover:from-[#11213b] hover:via-[#193259] hover:to-[#0a1424] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(37,84,226,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(18,35,63,0.4)]",

    // High-Contrast Solid Midnight (ideal on White folds)
    dark:
      "relative border border-slate-800 bg-[#07090e] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#111723] hover:border-[#d49d2c] " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#07090e] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-slate-100 hover:border-slate-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#e5b242] hover:bg-white/10 hover:text-[#faf0d7]",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-slate-300 bg-white/90 text-[#0f172a] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#d49d2c] hover:text-[#d49d2c] hover:bg-slate-50",

    // WhatsApp Conversion Green CTA
    emerald:
      "relative border border-[#25D366]/70 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 hover:brightness-110 " +
      "hover:shadow-[0_10px_26px_rgba(37,211,102,0.55)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
