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
    | "wine"
    | "ruby"
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

  // High-contrast prestige styling (black & white with signature polished gold & warm wine accents)
  const variantClasses = {
    // Primary Signature: Polished Imperial Gold & Champagne (From Valéria Raposo Logo)
    gold:
      "relative border border-[#fdf5e2]/90 bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#8a5d12] text-white font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(184,134,40,0.48),inset_0_1px_1px_rgba(255,255,255,0.45)] " +
      "hover:-translate-y-0.5 hover:from-[#b88628] hover:via-[#e2be67] hover:to-[#9b6e1b] " +
      "hover:shadow-[0_10px_30px_rgba(226,190,103,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(184,134,40,0.4)]",

    // Secondary Accent: Signature Velvet Wine / Marsala
    wine:
      "relative border border-[#f7c5ce]/40 bg-gradient-to-r from-[#80182a] via-[#a41f3d] to-[#6a0f21] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(128,24,42,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:from-[#9e1836] hover:via-[#c53150] hover:to-[#80182a] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(164,31,61,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(128,24,42,0.4)]",

    // Alias ruby to wine
    ruby:
      "relative border border-[#f7c5ce]/40 bg-gradient-to-r from-[#80182a] via-[#a41f3d] to-[#6a0f21] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(128,24,42,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:from-[#9e1836] hover:via-[#c53150] hover:to-[#80182a] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(164,31,61,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(128,24,42,0.4)]",

    // High-Contrast Solid Black (ideal on White folds)
    dark:
      "relative border border-stone-800 bg-[#090a0d] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-[#171920] hover:border-[#b88628] " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)]",

    // High-Contrast Pure White (ideal on Black folds)
    white:
      "relative border border-white bg-white text-[#090a0d] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-stone-100 hover:border-stone-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#e2be67] hover:bg-white/10 hover:text-[#faecd3]",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-stone-300 bg-white/80 text-[#0f172a] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#b88628] hover:text-[#b88628] hover:bg-stone-50",

    // WhatsApp Green CTA
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
