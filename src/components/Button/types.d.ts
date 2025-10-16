import { ComponentPropsWithoutRef } from "react";
import { VariantProps } from "tailwind-variants";
import { LucideIcon } from "lucide-react";
import { buttonVariants } from "./Button";

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  ariaLabel?: string;
}
