import React from "react";

/**
 * Small stat card placed on the red hero ("오늘 통화 12통", "분석 결과 …").
 * Translucent/lighter-red panel with an icon+label row and a value line.
 */
export function StatTile({ icon, label, value, style, ...rest }) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--red-400)",
        boxShadow: "var(--shadow-float)",
        color: "#fff",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {icon}
        <span style={{ font: "var(--font-sans)", fontSize: 14, fontWeight: 500, letterSpacing: "var(--tracking-tight)" }}>
          {label}
        </span>
      </div>
      <span style={{ font: "var(--font-sans)", fontSize: 18, fontWeight: 700, lineHeight: 1.25 }}>
        {value}
      </span>
    </div>
  );
}
