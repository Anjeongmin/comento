import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "soft" | "ghost";
  /** @default "lg" */
  size?: "lg" | "md" | "sm";
  /** Stretch to container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Leading icon node (place an inline SVG ~18-20px). */
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * The app's primary call-to-action. `primary` is a red gradient pill with a
 * brand glow; `secondary` is a hairline gray pill; `soft` is a tinted red
 * chip; `ghost` is text-only. Default size `lg` is the full-width screen CTA.
 *
 * @startingPoint section="Forms" subtitle="Brand CTA button" viewport="360x120"
 */
export function Button(props: ButtonProps): JSX.Element;
