import React from "react";

/**
 * Surface container. `plain` = white with hairline + soft shadow (the default
 * resting card). `subtle` = gray inset panel (feedback highlights). `brand` =
 * red gradient hero card (오늘의 요약). `tint` = soft red callout.
 */
export function Card({ children, variant = "plain", padding = 16, radius, style, ...rest }) {
  const variants = {
    plain: { background: "var(--surface-card)", color: "var(--text-strong)", boxShadow: "var(--shadow-card-hairline)" },
    subtle: { background: "var(--surface-subtle)", color: "var(--text-strong)", boxShadow: "none" },
    brand: { background: "var(--gradient-brand)", color: "#fff", boxShadow: "var(--shadow-float)" },
    tint: { background: "var(--red-400)", color: "#fff", boxShadow: "none" },
    softtint: { background: "var(--color-primary-soft)", color: "var(--color-primary)", boxShadow: "none" },
  };
  const v = variants[variant] || variants.plain;
  const r = radius ?? (variant === "brand" ? "var(--radius-2xl)" : "var(--radius-xl)");
  return (
    <div
      style={{
        boxSizing: "border-box",
        borderRadius: r,
        padding,
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
