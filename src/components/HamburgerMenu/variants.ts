import { tv } from "tailwind-variants";

export const menuToggleVariants = tv({
  base: [
    "flex items-center justify-center rounded-md cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "h-10 w-10",
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
