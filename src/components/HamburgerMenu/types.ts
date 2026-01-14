import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { menuToggleVariants } from "./variants";

export interface HamburgerMenuProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof menuToggleVariants> {
  isOpen: boolean;
  onToggle: () => void;
  openLabel?: string;
  closeLabel?: string;
}
