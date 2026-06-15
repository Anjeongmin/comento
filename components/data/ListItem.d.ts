import React from "react";

export interface ListItemProps {
  /** Leading icon node (rendered inside a 48px gray tile). */
  icon?: React.ReactNode;
  iconVariant?: "muted" | "soft";
  title: string;
  /** Secondary line — timestamp / duration. */
  meta?: string;
  /** Trailing action: a string renders the chip button, or pass a node. */
  action?: React.ReactNode;
  onAction?: () => void;
  onClick?: () => void;
  /** Hairline divider below the row. @default false */
  divider?: boolean;
  style?: React.CSSProperties;
}

/**
 * Call-history list row — icon tile, title + meta, trailing "요약 보기" chip.
 *
 * @startingPoint section="Data" subtitle="Call list row" viewport="360x80"
 */
export function ListItem(props: ListItemProps): JSX.Element;
