import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import type { LucideIcon } from "lucide-react";
import { buttonVariants } from "./variants";

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  ariaLabel?: string;
}
