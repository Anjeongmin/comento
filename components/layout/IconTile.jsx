import React from "react";

/**
 * Rounded square icon container — the gray tile behind call-type and feature
 * icons. `muted` = gray-100 tile, `soft` = red-tinted, `brand` = solid red.
 */
export function IconTile({ children, size = 48, radius = 12, variant = "muted", style, ...rest }) {
  const variants = {
    muted: { background: "var(--surface-muted)", color: "var(--color-primary)" },
    soft:  { background: "var(--color-primary-soft)", color: "var(--color-primary)" },
    brand: { background: "var(--color-primary)", color: "#fff" },
    plain: { background: "var(--surface-subtle)", color: "var(--gray-700)" },
  };
  const v = variants[variant] || variants.muted;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: radius,
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
