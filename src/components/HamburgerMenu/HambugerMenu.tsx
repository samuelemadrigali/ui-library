"use client";

import { type ComponentRef, forwardRef } from "react";
import type { HamburgerMenuProps } from "./types";
import { Menu, X } from "lucide-react";
import { menuToggleVariants } from "./variants";

export const HamburgerMenu = forwardRef<
  ComponentRef<"button">,
  HamburgerMenuProps
>(function (
  {
    className,
    isOpen,
    onToggle,
    openLabel = "Close menu",
    closeLabel = "Open menu",
    color,
    size,
    ...props
  },
  ref
) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={menuToggleVariants({ color, size, className })}
      aria-label={isOpen ? openLabel : closeLabel}
      aria-expanded={isOpen}
      ref={ref}
      {...props}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
});
