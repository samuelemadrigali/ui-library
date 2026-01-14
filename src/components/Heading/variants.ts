import { tv } from "tailwind-variants";

export const headingVariants = tv({
  variants: {
    level: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg",
      h6: "text-base",
    },
    color: {
      primary: "text-primary",
      accent: "text-accent",
      white: "text-white",
    },
  },
  defaultVariants: {
    level: "h1",
    color: "primary",
  },
});
