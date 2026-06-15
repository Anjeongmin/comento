import React from "react";

const ICONS = {
  home: (a) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={a ? "currentColor" : "none"}>
      <path d="M3 10.5L12 3l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={a ? "currentColor" : "none"}/>
    </svg>
  ),
  emotion: (a) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 5a2 2 0 012-2h5v18H6a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill={a ? "currentColor" : "none"}/>
      <path d="M20 5a2 2 0 00-2-2h-5v18h5a2 2 0 002-2V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  subtitle: (a) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  review: (a) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 18a4 4 0 01-.6-7.96 5.5 5.5 0 0110.86-1.2A3.75 3.75 0 0117.5 18H7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill={a ? "currentColor" : "none"}/>
    </svg>
  ),
};

/**
 * Bottom tab bar with a centered floating red call FAB — the app's primary
 * navigation. Four labelled tabs (홈 / 감정 기록 / 자막 / 돌아보기) flank a raised
 * circular call button.
 */
export function BottomNav({
  value = "home",
  onChange,
  onCall,
  items,
  style,
  ...rest
}) {
  const tabs = items || [
    { key: "home", label: "홈", icon: "home" },
    { key: "emotion", label: "감정 기록", icon: "emotion" },
    { key: "subtitle", label: "자막", icon: "subtitle" },
    { key: "review", label: "돌아보기", icon: "review" },
  ];
  const left = tabs.slice(0, 2);
  const right = tabs.slice(2);

  const Tab = ({ t }) => {
    const a = t.key === value;
    const render = ICONS[t.icon] || (() => null);
    return (
      <button
        type="button"
        onClick={() => onChange && onChange(t.key)}
        style={{
          flex: 1, border: "none", background: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          padding: "6px 0",
          color: a ? "var(--color-primary)" : "var(--text-muted)",
          transition: "color var(--dur-fast) var(--ease-standard)",
        }}
      >
        {render(a)}
        <span style={{ font: "var(--font-sans)", fontSize: 11, fontWeight: a ? 700 : 500 }}>{t.label}</span>
      </button>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        height: 84,
        padding: "0 8px 14px",
        background: "var(--surface-page)",
        borderTop: "1px solid var(--border-subtle)",
        boxShadow: "0 -2px 12px rgba(17,24,39,0.05)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flex: 1 }}>{left.map((t) => <Tab key={t.key} t={t} />)}</div>
      <div style={{ width: 76, flexShrink: 0 }} />
      <div style={{ display: "flex", flex: 1 }}>{right.map((t) => <Tab key={t.key} t={t} />)}</div>

      <button
        type="button"
        onClick={onCall}
        aria-label="call"
        style={{
          position: "absolute",
          left: "50%",
          top: -22,
          transform: "translateX(-50%)",
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "4px solid var(--surface-page)",
          background: "var(--gradient-brand)",
          boxShadow: "var(--shadow-fab)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M6.6 10.8a13 13 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.3a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.24 1l-2.2 2.3z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
