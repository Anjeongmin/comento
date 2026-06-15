import React from "react";

/**
 * Small status pill. `solid` = filled red (timeline markers like "부정적 기류"),
 * `soft` = tinted red on light, `outline` = hairline neutral.
 */
export function Badge({ children, variant = "solid", style, ...rest }) {
  const variants = {
    solid:   { background: "var(--color-primary)", color: "#fff", boxShadow: "none" },
    soft:    { background: "var(--color-primary-soft)", color: "var(--color-primary)", boxShadow: "none" },
    outline: { background: "var(--surface-subtle)", color: "var(--gray-700)", boxShadow: "var(--ring-default)" },
    coral:   { background: "var(--red-300)", color: "#fff", boxShadow: "none" },
  };
  const v = variants[variant] || variants.solid;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        height: 26,
        padding: "0 10px",
        borderRadius: "var(--radius-xs)",
        font: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 700,
        whiteSpace: "nowrap",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
