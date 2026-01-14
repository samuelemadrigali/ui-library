import { tv } from "tailwind-variants";

export const selectVariants = tv({
  base: [
    "w-full rounded-md border transition-colors appearance-none",
    "bg-background text-foreground",
    "px-3 py-2 pr-10",
    "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
    "disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:border-border",
  ],
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500 focus:border-red-500",
      false: "border-border",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export const labelVariants = tv({
  base: "font-medium text-sm text-font-primary",
  variants: {
    disabled: {
      true: "text-muted-foreground cursor-not-allowed",
      false: "",
    },
  },
});

export const containerVariants = tv({
  variants: {
    labelPosition: {
      top: "flex flex-col gap-1.5",
      inline: "flex items-center gap-2",
    },
  },
  defaultVariants: {
    labelPosition: "top",
  },
});
