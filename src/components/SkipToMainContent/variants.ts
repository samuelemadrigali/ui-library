import { tv } from "tailwind-variants";

export const skipToMainContentVariants = tv({
  base: [
    "absolute -top-40 left-4 z-50",
    "bg-primary text-white",
    "rounded px-4 py-2",
    "shadow-lg",
    "ring-2 ring-primary ring-offset-2",
    "transition-all duration-200",
    "hover:bg-primary-light",
    "focus:top-4 focus:outline-none",
  ],
});
