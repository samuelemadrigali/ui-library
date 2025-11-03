"use client";

import { type ComponentRef, forwardRef } from "react";
import type { AlertProps } from "./types";
import { tv } from "tailwind-variants";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  type LucideIcon,
} from "lucide-react";

const alertVariants = tv({
  base: [
    "relative w-full rounded-lg border px-4 py-3",
    "flex items-start gap-3",
  ],
  variants: {
    variant: {
      success: "border-green-200 bg-green-50 text-green-800",
      error: "border-red-200 bg-red-50 text-red-800",
      warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
      info: "border-blue-200 bg-blue-50 text-blue-800",
      neutral: "border-gray-200 bg-gray-50 text-gray-800",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const alertIconVariants = tv({
  base: "h-4 w-4 mt-0.5 flex-shrink-0",
  variants: {
    variant: {
      success: "text-green-600",
      error: "text-red-600",
      warning: "text-yellow-600",
      info: "text-blue-600",
      neutral: "text-gray-600",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

const alertCloseButtonVariants = tv({
  base: [
    "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background",
    "transition-opacity hover:opacity-100",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    "disabled:pointer-events-none",
    "h-4 w-4 p-0 border-0 bg-transparent cursor-pointer",
  ],
  variants: {
    variant: {
      success: "text-green-600 hover:text-green-700",
      error: "text-red-600 hover:text-red-700",
      warning: "text-yellow-600 hover:text-yellow-700",
      info: "text-blue-600 hover:text-blue-700",
      neutral: "text-gray-600 hover:text-gray-700",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export { alertVariants, alertIconVariants, alertCloseButtonVariants };

const defaultIcons: Record<string, LucideIcon> = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
  neutral: Info,
};

export const Alert = forwardRef<ComponentRef<"div">, AlertProps>(function (
  {
    variant = "info",
    className,
    children,
    icon = true,
    dismissible = false,
    onDismiss,
    dismissLabel = "Dismiss",
    ...props
  },
  ref
) {
  const IconComponent =
    typeof icon === "boolean" ? (icon ? defaultIcons[variant!] : null) : icon;

  return (
    <div
      ref={ref}
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    >
      {IconComponent && (
        <IconComponent className={alertIconVariants({ variant })} />
      )}
      <div className="min-w-0 flex-1">{children}</div>
      {dismissible && (
        <button
          type="button"
          className={alertCloseButtonVariants({ variant })}
          onClick={onDismiss}
          aria-label={dismissLabel}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
});
