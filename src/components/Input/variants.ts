import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: [
    "w-full rounded-md border transition-colors",
    "bg-background text-foreground",
    "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
    "disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:border-border",
  ],
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500 focus:border-red-500",
      false: "border-border",
    },
    inputType: {
      text: "px-3 py-2",
      checkbox: "h-4 w-4 rounded cursor-pointer accent-primary",
      radio: "h-4 w-4 rounded-full cursor-pointer accent-primary",
    },
  },
  defaultVariants: {
    error: false,
    inputType: "text",
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
