import React from "react";

/**
 * Labelled progress meter used throughout the analysis reports
 * (침묵 / 말빠르기 / 떨림 / 흐름 and emotion distribution like 친절함 70%).
 * Label sits above the track; optional value renders right-aligned.
 */
export function MetricBar({
  label,
  value = 0,            // 0-100
  display,              // optional override text e.g. "70%"
  showValue = true,
  height = 10,
  color = "var(--color-primary)",
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          {label && (
            <span style={{ font: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--text-strong)" }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{ font: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--text-strong)" }}>
              {display ?? `${pct}%`}
            </span>
          )}
        </div>
      )}
      <div style={{
        position: "relative",
        height,
        borderRadius: "var(--radius-pill)",
        background: "var(--track-bg)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          width: `${pct}%`,
          borderRadius: "var(--radius-pill)",
          background: color,
          transition: "width var(--dur-slow) var(--ease-out)",
        }} />
      </div>
    </div>
  );
}
