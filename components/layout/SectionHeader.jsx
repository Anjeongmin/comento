import React from "react";

/**
 * Section heading row: bold title on the left, optional muted action link
 * ("전체보기") on the right. Used between page sections.
 */
export function SectionHeader({ title, action, onAction, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      <span style={{ font: "var(--font-sans)", fontSize: 18, fontWeight: 700, color: "var(--text-strong)" }}>
        {title}
      </span>
      {action && (
        <button
          type="button"
          onClick={onAction}
          style={{
            border: "none", background: "none", cursor: "pointer", padding: 0,
            font: "var(--font-sans)", fontSize: 16, fontWeight: 500, color: "var(--text-muted)",
          }}
        >
          {action}
        </button>
      )}
    </div>
  );
}
