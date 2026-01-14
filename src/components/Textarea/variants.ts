import { tv } from "tailwind-variants";

export const textareaVariants = tv({
  base: [
    "w-full rounded-md border transition-colors resize-y",
    "bg-background text-foreground",
    "px-3 py-2 min-h-[80px]",
    "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
    "disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:border-border disabled:resize-none",
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
      inline: "flex items-start gap-2",
    },
  },
  defaultVariants: {
    labelPosition: "top",
  },
});
