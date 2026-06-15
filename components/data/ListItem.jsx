import React from "react";

/**
 * Call-history / generic list row: leading icon tile, title + meta stacked,
 * trailing action (button label or node). Mirrors "최근 통화 목록" rows.
 */
export function ListItem({
  icon,
  iconVariant = "muted",
  title,
  meta,
  action,
  onAction,
  onClick,
  divider = false,
  style,
  ...rest
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "12px 4px",
        cursor: onClick ? "pointer" : "default",
        borderBottom: divider ? "1px solid var(--border-subtle)" : "none",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
        {icon != null && (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 48, height: 48, flexShrink: 0, borderRadius: 12,
            background: iconVariant === "soft" ? "var(--color-primary-soft)" : "var(--surface-muted)",
            color: "var(--color-primary)",
          }}>
            {icon}
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
          <span style={{
            font: "var(--font-sans)", fontSize: 17, fontWeight: 700, color: "var(--text-strong)",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{title}</span>
          {meta && (
            <span style={{ font: "var(--font-sans)", fontSize: 14, fontWeight: 400, color: "var(--text-muted)" }}>
              {meta}
            </span>
          )}
        </div>
      </div>
      {action != null && (
        typeof action === "string" ? (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onAction && onAction(); }}
            style={{
              flexShrink: 0, border: "none", cursor: "pointer",
              padding: "8px 12px", borderRadius: "var(--radius-xs)",
              background: "var(--surface-subtle)", boxShadow: "var(--ring-default)",
              font: "var(--font-sans)", fontSize: 12, fontWeight: 700, color: "var(--gray-700)",
            }}
          >{action}</button>
        ) : action
      )}
    </div>
  );
}
