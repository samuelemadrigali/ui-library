import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold",
    "transition-colors duration-200 ease-in-out cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      fill: "",
      outline: "border-2 bg-transparent",
      link: "underline-offset-4 hover:underline bg-transparent border-none p-0 h-auto",
    },
    color: {
      primary: "",
      accent: "",
      danger: "",
      warning: "",
      success: "",
      neutral: "",
      "text-color": "",
    },
    size: {
      sm: "h-9 px-3 text-sm",
      default: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-base",
      xl: "h-12 px-10 text-lg",
      icon: "h-10 w-10 p-0",
    },
    disableHover: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "fill",
      color: "primary",
      class: [
        "bg-primary text-white",
        "hover:bg-primary-light",
        "focus-visible:ring-primary",
      ],
    },
    {
      variant: "fill",
      color: "accent",
      class: [
        "bg-accent text-white",
        "hover:bg-accent-light",
        "focus-visible:ring-accent",
      ],
    },
    {
      variant: "fill",
      color: "danger",
      class: [
        "bg-red-600 text-white",
        "hover:bg-red-700",
        "focus-visible:ring-red-600",
      ],
    },
    {
      variant: "fill",
      color: "warning",
      class: [
        "bg-yellow-500 text-white",
        "hover:bg-yellow-600",
        "focus-visible:ring-yellow-500",
      ],
    },
    {
      variant: "fill",
      color: "success",
      class: [
        "bg-green-600 text-white",
        "hover:bg-green-700",
        "focus-visible:ring-green-600",
      ],
    },
    {
      variant: "fill",
      color: "neutral",
      class: [
        "bg-gray-200 text-gray-900",
        "hover:bg-gray-300",
        "focus-visible:ring-gray-400",
      ],
    },
    {
      variant: "outline",
      color: "primary",
      class: [
        "border-primary text-primary",
        "hover:bg-primary hover:text-white",
        "focus-visible:ring-primary",
      ],
    },
    {
      variant: "outline",
      color: "accent",
      class: [
        "border-accent text-accent",
        "hover:bg-accent hover:text-white",
        "focus-visible:ring-accent",
      ],
    },
    {
      variant: "outline",
      color: "danger",
      class: [
        "border-red-600 text-red-600",
        "hover:bg-red-600 hover:text-white",
        "focus-visible:ring-red-600",
      ],
    },
    {
      variant: "outline",
      color: "warning",
      class: [
        "border-yellow-500 text-yellow-600",
        "hover:bg-yellow-500 hover:text-white",
        "focus-visible:ring-yellow-500",
      ],
    },
    {
      variant: "outline",
      color: "success",
      class: [
        "border-green-600 text-green-600",
        "hover:bg-green-600 hover:text-white",
        "focus-visible:ring-green-600",
      ],
    },
    {
      variant: "outline",
      color: "neutral",
      class: [
        "border-gray-400 text-gray-700",
        "hover:bg-gray-100",
        "focus-visible:ring-gray-400",
      ],
    },
    {
      variant: "link",
      color: "primary",
      class: ["text-primary", "hover:text-primary-light"],
    },
    {
      variant: "link",
      color: "accent",
      class: ["text-accent", "hover:text-accent-light"],
    },
    {
      variant: "link",
      color: "danger",
      class: ["text-red-600", "hover:text-red-700"],
    },
    {
      variant: "link",
      color: "warning",
      class: ["text-yellow-600", "hover:text-yellow-700"],
    },
    {
      variant: "link",
      color: "success",
      class: ["text-green-600", "hover:text-green-700"],
    },
    {
      variant: "link",
      color: "neutral",
      class: ["text-gray-700", "hover:text-gray-900"],
    },
    {
      variant: "fill",
      color: "text-color",
      class: [
        "bg-current text-white",
        "hover:opacity-90",
        "focus-visible:ring-current",
      ],
    },
    {
      variant: "outline",
      color: "text-color",
      class: [
        "border-current text-current",
        "hover:bg-current hover:text-white",
        "focus-visible:ring-current",
      ],
    },
    {
      variant: "link",
      color: "text-color",
      class: ["text-current", "hover:opacity-80"],
    },
    // Disable hover effects when disableHover is true
    {
      variant: "fill",
      disableHover: true,
      class: "[&:hover]:!bg-current [&:hover]:!opacity-100",
    },
    {
      variant: "outline",
      disableHover: true,
      class:
        "[&:hover]:!bg-transparent [&:hover]:!text-current [&:hover]:!opacity-100",
    },
    {
      variant: "link",
      disableHover: true,
      class: "[&:hover]:!no-underline [&:hover]:!opacity-100",
    },
  ],
  defaultVariants: {
    variant: "fill",
    color: "primary",
    size: "default",
  },
});
