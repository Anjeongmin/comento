import React from "react";

/**
 * Underline text field used on the login screen. Label sits as the
 * placeholder/floating caption; the field is a bottom-border input in brand red.
 */
export function Input({
  label,
  type = "text",
  value,
  defaultValue,
  onChange,
  placeholder,
  variant = "underline",
  style,
  ...rest
}) {
  const isUnderline = variant === "underline";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {label && (
        <span style={{
          font: "var(--font-sans)", fontSize: 14, fontWeight: 500,
          color: "var(--color-primary)", letterSpacing: "var(--tracking-tight)",
        }}>{label}</span>
      )}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          boxSizing: "border-box",
          height: isUnderline ? 40 : 48,
          padding: isUnderline ? "0 2px" : "0 16px",
          font: "var(--font-sans)",
          fontSize: 16,
          color: "var(--text-strong)",
          background: isUnderline ? "transparent" : "var(--surface-subtle)",
          border: "none",
          borderBottom: isUnderline ? "1.5px solid var(--border-default)" : "none",
          borderRadius: isUnderline ? 0 : "var(--radius-md)",
          boxShadow: isUnderline ? "none" : "var(--ring-default)",
          outline: "none",
          transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
        }}
        onFocus={(e) => {
          if (isUnderline) e.target.style.borderBottomColor = "var(--color-primary)";
          else e.target.style.boxShadow = "inset 0 0 0 1.5px var(--color-primary)";
        }}
        onBlur={(e) => {
          if (isUnderline) e.target.style.borderBottomColor = "var(--border-default)";
          else e.target.style.boxShadow = "var(--ring-default)";
        }}
        {...rest}
      />
    </div>
  );
}
