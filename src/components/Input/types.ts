import type { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: React.ReactNode;
  labelPosition?: "top" | "inline";
  error?: string;
  helperText?: string;
  className?: string;
}
