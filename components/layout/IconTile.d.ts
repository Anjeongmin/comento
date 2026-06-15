import React from "react";

export interface IconTileProps {
  children?: React.ReactNode;
  /** px, square. @default 48 */
  size?: number;
  /** corner radius px. @default 12 */
  radius?: number;
  /** @default "muted" */
  variant?: "muted" | "soft" | "brand" | "plain";
  style?: React.CSSProperties;
}

/** Rounded-square icon container (the gray tile behind list/feature icons). */
export function IconTile(props: IconTileProps): JSX.Element;
