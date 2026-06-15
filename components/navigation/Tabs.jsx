import React from "react";

/**
 * Underline tab bar used on report screens (종합 / 감정 / 표현 / 흐름).
 * Active tab is brand red with a red underline; others are muted.
 */
export function Tabs({ tabs = [], value, onChange, style, ...rest }) {
  const items = tabs.map((t) => (typeof t === "string" ? { key: t, label: t } : t));
  const active = value ?? items[0]?.key;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        borderBottom: "1px solid var(--border-subtle)",
        ...style,
      }}
      {...rest}
    >
      {items.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onChange && onChange(t.key)}
            style={{
              flex: 1,
              position: "relative",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "12px 4px 14px",
              font: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 700,
              color: isActive ? "var(--color-primary)" : "var(--text-muted)",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}
          >
            {t.label}
            <span style={{
              position: "absolute",
              left: "18%",
              right: "18%",
              bottom: -1,
              height: 3,
              borderRadius: 3,
              background: isActive ? "var(--color-primary)" : "transparent",
              transition: "background var(--dur-fast) var(--ease-standard)",
            }} />
          </button>
        );
      })}
    </div>
  );
}
