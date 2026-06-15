import React from "react";

/**
 * Primary action button for the Call-Coach system.
 * Full-width pill by default — the dominant CTA pattern across the app
 * ("다음", "LOGIN", "리포트 상세 분석 보기").
 */
export function Button({
  children,
  variant = "primary",
  size = "lg",
  block = false,
  disabled = false,
  icon = null,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    lg: { height: 56, fontSize: 18, padding: "0 24px", radius: "var(--radius-pill)", weight: 700 },
    md: { height: 46, fontSize: 16, padding: "0 20px", radius: "var(--radius-pill)", weight: 700 },
    sm: { height: 36, fontSize: 14, padding: "0 14px", radius: "var(--radius-md)", weight: 700 },
  };
  const s = sizes[size] || sizes.lg;

  const variants = {
    primary: {
      background: "var(--gradient-brand)",
      color: "var(--color-on-primary)",
      boxShadow: "var(--shadow-fab)",
    },
    secondary: {
      background: "var(--surface-subtle)",
      color: "var(--gray-700)",
      boxShadow: "var(--ring-default)",
    },
    soft: {
      background: "var(--color-primary-soft)",
      color: "var(--color-primary)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      boxShadow: "none",
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: block ? "100%" : "auto",
        height: s.height,
        padding: s.padding,
        border: "none",
        borderRadius: s.radius,
        font: "var(--font-sans)",
        fontSize: s.fontSize,
        fontWeight: s.weight,
        lineHeight: 1,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(var(--press-scale))"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
