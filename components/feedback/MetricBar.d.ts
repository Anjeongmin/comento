import React from "react";

export interface MetricBarProps {
  /** Metric name shown above the track. */
  label?: string;
  /** Fill percentage 0–100. */
  value?: number;
  /** Override the right-aligned value text (e.g. "70%"). */
  display?: string;
  /** @default true */
  showValue?: boolean;
  /** Track height in px. @default 10 */
  height?: number;
  /** Fill color. @default brand red */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Labelled progress meter for analysis scores (침묵/말빠르기/떨림/흐름) and
 * emotion distribution (친절함 70%). Animated red fill on a gray pill track.
 */
export function MetricBar(props: MetricBarProps): JSX.Element;
