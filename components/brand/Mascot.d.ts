import React from "react";

export interface MascotProps {
  /** Path to a mascot PNG (see assets/mascot-*.png). */
  src: string;
  /** Box size in px. @default 120 */
  size?: number;
  /** Wrap in a soft pink halo circle. @default false */
  halo?: boolean;
  haloColor?: string;
  alt?: string;
  style?: React.CSSProperties;
}

/**
 * The headset-tomato brand mascot. Four source images cover happy/sad ×
 * head/full-body. Use the happy head with a halo for onboarding/empty states.
 */
export function Mascot(props: MascotProps): JSX.Element;
