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
    | "emerald"
    | "dark"
    | "champagne"
    | "outline"
    | "white"
    | "navy"
    | "ruby";
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

  // Haute prestige styling aligned with Dra. Carolina Vasconcelos visual identity
  const variantClasses = {
    // Primary Signature: Brushed Metallic Imperial Gold with Specular Highlight & Warm Radiant Aura
    gold:
      "relative border border-[#fbefb4]/90 bg-gradient-to-r from-[#c8953c] via-[#fdd984] to-[#a67528] text-[#0f0508] font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(220,169,78,0.5),inset_0_1px_1.5px_rgba(255,255,255,0.9),inset_0_-1px_1.5px_rgba(0,0,0,0.35)] " +
      "hover:-translate-y-0.5 hover:from-[#dca94e] hover:via-[#fbfaf3] hover:to-[#c8953c] " +
      "hover:shadow-[0_10px_32px_-2px_rgba(253,217,132,0.75),inset_0_1px_2px_rgba(255,255,255,1)] " +
      "hover:border-[#ffffff] active:translate-y-0 active:shadow-[0_3px_12px_rgba(220,169,78,0.4)]",

    // Deep Velvet Burgundy with Gold Border
    ruby:
      "relative border border-[#dca94e]/70 bg-gradient-to-r from-[#4c2025] via-[#911e24] to-[#4c2025] text-[#fbfaf5] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(145,30,36,0.6),inset_0_1px_1px_rgba(253,217,132,0.5),inset_0_-1px_1px_rgba(0,0,0,0.5)] " +
      "hover:-translate-y-0.5 hover:border-[#fbefb4] hover:from-[#671b25] hover:via-[#a4332b] hover:to-[#671b25] " +
      "hover:shadow-[0_10px_30px_-2px_rgba(185,28,40,0.75),0_0_20px_rgba(220,169,78,0.35)]",

    // Emerald / WhatsApp High-Conversion Action
    emerald:
      "relative border border-[#25D366]/70 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] text-[#ffffff] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(37,211,102,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.5)] " +
      "hover:-translate-y-0.5 hover:border-[#25D366] hover:brightness-110 " +
      "hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)]",

    champagne:
      "relative border border-[#fdd984] bg-gradient-to-r from-[#91632c] via-[#dca94e] to-[#91632c] text-[#0f0508] font-black tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(220,169,78,0.4),inset_0_1px_1px_rgba(255,255,255,0.7)] " +
      "hover:-translate-y-0.5 hover:from-[#a67528] hover:via-[#fbefb4] hover:to-[#a67528] hover:shadow-[0_10px_28px_rgba(220,169,78,0.6)]",

    // Luxury Velvet Noir Surface with Gold Rim
    dark:
      "relative border border-[#dca94e]/45 bg-[#17090d] text-[#fbfaf5] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)] " +
      "hover:-translate-y-0.5 hover:bg-[#240e15] hover:border-[#fdd984] hover:text-white " +
      "hover:shadow-[0_8px_25px_rgba(220,169,78,0.3)]",

    // Outline with Gold Accent & Glassmorphism
    outline:
      "relative border border-[#dca94e]/60 bg-[#0f0508]/60 backdrop-blur-md text-[#fdd984] font-bold tracking-[0.13em] " +
      "shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] " +
      "hover:-translate-y-0.5 hover:border-[#fbefb4] hover:bg-[#dca94e]/15 hover:text-white " +
      "hover:shadow-[0_6px_20px_rgba(220,169,78,0.3)]",

    white:
      "border border-[#ede0cd]/20 bg-white/10 text-white backdrop-blur-md shadow-sm hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40",
    navy:
      "border border-[#dca94e]/60 bg-gradient-to-r from-[#17090d] via-[#240e15] to-[#17090d] text-[#fbfaf5] font-bold shadow-md shadow-black/60 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#fdd984]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fdd984] select-none text-center cursor-pointer " +
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
