import React from "react";

export interface AppHeaderProps {
  title: string;
  onBack?: () => void;
  /** @default true */
  showBack?: boolean;
  /** Trailing action node (e.g. a share icon). */
  action?: React.ReactNode;
  onAction?: () => void;
  style?: React.CSSProperties;
}

/** Top bar with red back chevron, centered title, optional trailing action. */
export function AppHeader(props: AppHeaderProps): JSX.Element;
