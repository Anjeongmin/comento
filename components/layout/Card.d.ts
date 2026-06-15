import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** @default "plain" */
  variant?: "plain" | "subtle" | "brand" | "tint" | "softtint";
  /** Interior padding px. @default 16 */
  padding?: number;
  /** Override corner radius. */
  radius?: string | number;
  style?: React.CSSProperties;
}

/**
 * Surface container. `plain` is the resting white card (hairline + soft shadow);
 * `brand` is the red gradient hero (오늘의 요약); `subtle` a gray inset panel;
 * `tint`/`softtint` are red callouts.
 *
 * @startingPoint section="Layout" subtitle="Card surfaces" viewport="360x200"
 */
export function Card(props: CardProps): JSX.Element;
