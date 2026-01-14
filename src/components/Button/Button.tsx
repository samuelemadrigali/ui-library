"use client";

import type { ComponentRef } from "react";
import type { ButtonProps } from "./types";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { buttonVariants } from "./variants";

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
