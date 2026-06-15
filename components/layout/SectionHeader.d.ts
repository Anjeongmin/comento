import React from "react";

export interface SectionHeaderProps {
  title: string;
  /** Optional right-aligned link label (e.g. "전체보기"). */
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}

/** Bold section title with an optional muted action link on the right. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
