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
    | "ruby"
    | "gold"
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
  variant = "ruby",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (black & white with signature wine red secondary)
  const variantClasses = {
    // Primary Signature: Metallic Ruby Wine & Marsala (Logo color)
    ruby:
      "relative border border-[#f7c5ce]/40 bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(158,24,54,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:from-[#b91c28] hover:via-[#dc264e] hover:to-[#9e1836] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(197,49,80,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(158,24,54,0.4)]",

    // Champagne Gold Accent
    gold:
      "relative border border-[#f9eedc]/90 bg-gradient-to-r from-[#c88e4b] via-[#f4d8a8] to-[#a67035] text-[#09090b] font-black tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(200,142,75,0.4)] hover:-translate-y-0.5 hover:from-[#dfa968] hover:via-white hover:to-[#c88e4b] " +
      "hover:shadow-[0_10px_28px_rgba(244,216,168,0.6)]",

    // High-Contrast Solid Black (ideal on White folds)
    dark:
      "relative border border-stone-800 bg-[#09090b] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-[#18181b] hover:border-stone-700 " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)]",

    // High-Contrast Pure White (ideal on Black folds)
    white:
      "relative border border-white bg-white text-[#09090b] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-stone-100 hover:border-stone-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-stone-300 bg-white/80 text-[#0f172a] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#9e1836] hover:text-[#9e1836] hover:bg-stone-50",

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
