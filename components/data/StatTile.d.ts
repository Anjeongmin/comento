import React from "react";

export interface StatTileProps {
  icon?: React.ReactNode;
  label: string;
  /** Value text or node — large numbers ("12통") or short copy. */
  value?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Lighter-red stat panel that sits inside the brand hero card. */
export function StatTile(props: StatTileProps): JSX.Element;
