import { tv } from "tailwind-variants";

export const containerVariants = tv({
  base: "mx-auto",
  variants: {
    size: {
      sm: "max-w-3xl", // ~768px
      md: "max-w-5xl", // ~1024px
      lg: "max-w-6xl", // ~1152px
      xl: "max-w-7xl", // ~1280px
      "2xl": "max-w-screen-2xl", // ~1536px
    },
    padding: {
      true: "px-4",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    padding: true,
  },
});
