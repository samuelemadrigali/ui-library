import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { menuToggleVariants } from "./HambugerMenu";

export interface HamburgerMenuProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof menuToggleVariants> {
  isOpen: boolean;
  onToggle: () => void;
  openLabel?: string;
  closeLabel?: string;
}
