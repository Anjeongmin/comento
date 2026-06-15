import React from "react";

export interface TabItem { key: string; label: string; }

export interface TabsProps {
  /** Array of strings or {key,label}. */
  tabs: (string | TabItem)[];
  /** Controlled active key. */
  value?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar for report sections (종합/감정/표현/흐름). */
export function Tabs(props: TabsProps): JSX.Element;
