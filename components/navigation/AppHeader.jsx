import React from "react";

/**
 * Top app bar: optional back chevron, centered title, optional trailing action.
 * Back & share glyphs are brand red on report screens.
 */
export function AppHeader({ title, onBack, action, onAction, showBack = true, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        padding: "0 16px",
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-subtle)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: 40, display: "flex", justifyContent: "flex-start" }}>
        {showBack && (
          <button type="button" onClick={onBack} aria-label="back" style={{
            border: "none", background: "none", cursor: "pointer", padding: 4,
            color: "var(--color-primary)", display: "flex",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      <span style={{ font: "var(--font-sans)", fontSize: 20, fontWeight: 700, color: "var(--text-strong)" }}>
        {title}
      </span>
      <div style={{ width: 40, display: "flex", justifyContent: "flex-end", color: "var(--color-primary)" }}>
        {action != null && (
          <button type="button" onClick={onAction} aria-label="action" style={{
            border: "none", background: "none", cursor: "pointer", padding: 4, color: "inherit", display: "flex",
          }}>{action}</button>
        )}
      </div>
    </div>
  );
}
