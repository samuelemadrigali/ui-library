import type { ComponentRef } from "react";
import type { ButtonProps } from "./types";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
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
    },
    size: {
      sm: "h-9 px-3 text-sm",
      default: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-base",
      xl: "h-12 px-10 text-lg",
      icon: "h-10 w-10 p-0",
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
        "hover:bg-accent/90",
        "focus-visible:ring-accent",
      ],
    },
    {
      variant: "fill",
      color: "danger",
      class: [
        "bg-red-500 text-white",
        "hover:bg-red-600",
        "focus-visible:ring-red-500",
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
        "bg-green-500 text-white",
        "hover:bg-green-600",
        "focus-visible:ring-green-500",
      ],
    },
    {
      variant: "fill",
      color: "neutral",
      class: [
        "bg-gray-100 text-gray-900",
        "hover:bg-gray-200",
        "focus-visible:ring-gray-500",
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
        "border-red-500 text-red-500",
        "hover:bg-red-500 hover:text-white",
        "focus-visible:ring-red-500",
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
        "border-green-500 text-green-500",
        "hover:bg-green-500 hover:text-white",
        "focus-visible:ring-green-500",
      ],
    },
    {
      variant: "outline",
      color: "neutral",
      class: [
        "border-gray-300 text-gray-700",
        "hover:bg-gray-50",
        "focus-visible:ring-gray-500",
      ],
    },
    {
      variant: "link",
      color: "primary",
      class: [
        "text-primary",
        "hover:text-primary-light",
        "focus-visible:ring-primary",
      ],
    },
    {
      variant: "link",
      color: "accent",
      class: [
        "text-accent",
        "hover:text-accent/80",
        "focus-visible:ring-accent",
      ],
    },
    {
      variant: "link",
      color: "danger",
      class: [
        "text-red-500",
        "hover:text-red-600",
        "focus-visible:ring-red-500",
      ],
    },
    {
      variant: "link",
      color: "warning",
      class: [
        "text-yellow-600",
        "hover:text-yellow-700",
        "focus-visible:ring-yellow-500",
      ],
    },
    {
      variant: "link",
      color: "success",
      class: [
        "text-green-500",
        "hover:text-green-600",
        "focus-visible:ring-green-500",
      ],
    },
    {
      variant: "link",
      color: "neutral",
      class: [
        "text-gray-700",
        "hover:text-gray-900",
        "focus-visible:ring-gray-500",
      ],
    },
  ],
  defaultVariants: {
    variant: "fill",
    color: "primary",
    size: "default",
  },
});

export { buttonVariants };

export const Button = forwardRef<ComponentRef<"button">, ButtonProps>(function (
  {
    className,
    variant,
    color,
    size,
    icon: Icon,
    iconPosition = "left",
    iconOnly = false,
    ariaLabel,
    children,
    asChild = false,
    ...props
  },
  ref
) {
  const Comp = asChild ? Slot : "button";

  const finalSize = iconOnly ? "icon" : size;

  const iconSize =
    finalSize === "sm"
      ? 16
      : finalSize === "lg"
      ? 20
      : finalSize === "xl"
      ? 24
      : finalSize === "icon"
      ? 20
      : 18;

  const renderContent = () => {
    if (iconOnly && Icon) {
      return (
        <>
          <Icon size={iconSize} />
          {ariaLabel && <VisuallyHidden.Root>{ariaLabel}</VisuallyHidden.Root>}
        </>
      );
    }

    if (!Icon) {
      return children;
    }

    if (iconPosition === "right") {
      return (
        <>
          {children}
          <Icon size={iconSize} className="ml-2" />
        </>
      );
    }

    return (
      <>
        <Icon size={iconSize} className="mr-2" />
        {children}
      </>
    );
  };

  return (
    <Comp
      className={buttonVariants({
        variant,
        color,
        size: finalSize,
        className,
      })}
      ref={ref}
      {...props}
    >
      {renderContent()}
    </Comp>
  );
});
