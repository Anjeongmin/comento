import React from "react";

export interface InputProps {
  /** Caption shown above the field (brand red). */
  label?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** `underline` = login style; `filled` = gray rounded field. @default "underline" */
  variant?: "underline" | "filled";
  style?: React.CSSProperties;
}

/**
 * Text input. The login screen uses the `underline` variant with a red label;
 * forms elsewhere use `filled`. Focus draws the brand red.
 */
export function Input(props: InputProps): JSX.Element;
