import type { ComponentPropsWithoutRef } from "react";

export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label?: React.ReactNode;
  labelPosition?: "top" | "inline";
  error?: string;
  helperText?: string;
  className?: string;
}
