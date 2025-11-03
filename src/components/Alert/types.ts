import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import type { LucideIcon } from "lucide-react";
import { alertVariants } from "./Alert";

type AlertVariants = VariantProps<typeof alertVariants>;

export interface AlertProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    AlertVariants {
  className?: string;
  icon?: LucideIcon | boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  dismissLabel?: string;
}

export type { AlertVariants };
