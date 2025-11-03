"use client";

import { type ComponentRef, forwardRef } from "react";
import type { HamburgerMenuProps } from "./types";
import { tv } from "tailwind-variants";
import { Menu, X } from "lucide-react";

const menuToggleVariants = tv({
  base: [
    "flex items-center justify-center rounded-md",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "h-10 w-10",
    "lg:hidden",
  ],
  variants: {
    color: {
      default: "text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500",
      inverted: "text-white hover:bg-white/10 focus-visible:ring-white",
    },
    size: {
      sm: "h-9 w-9",
      default: "h-10 w-10",
      lg: "h-11 w-11",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

export { menuToggleVariants };

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
