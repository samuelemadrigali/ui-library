import type { ComponentPropsWithoutRef } from "react";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: React.ReactNode;
  labelPosition?: "top" | "inline";
  error?: string;
  helperText?: string;
  className?: string;
}
