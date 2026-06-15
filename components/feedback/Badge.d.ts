import React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "solid" */
  variant?: "solid" | "soft" | "outline" | "coral";
  style?: React.CSSProperties;
}

/**
 * Compact status pill used for timeline markers ("부정적 기류", "긍정적 전환")
 * and small tags. `solid` is filled brand red.
 */
export function Badge(props: BadgeProps): JSX.Element;
