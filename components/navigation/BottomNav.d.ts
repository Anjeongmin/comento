import React from "react";

export interface BottomNavItem {
  key: string;
  label: string;
  /** Built-in icon name. */
  icon?: "home" | "emotion" | "subtitle" | "review";
}

export interface BottomNavProps {
  /** Active tab key. @default "home" */
  value?: string;
  onChange?: (key: string) => void;
  /** Center FAB tap. */
  onCall?: () => void;
  /** Override the four tabs. */
  items?: BottomNavItem[];
  style?: React.CSSProperties;
}

/**
 * Primary bottom navigation with a raised central red call FAB.
 * Four labelled tabs flank the button. Pin to the bottom of a 393px frame.
 *
 * @startingPoint section="Navigation" subtitle="Bottom tab bar + call FAB" viewport="393x90"
 */
export function BottomNav(props: BottomNavProps): JSX.Element;
