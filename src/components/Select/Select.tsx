"use client";

import { type ComponentRef, forwardRef, useId } from "react";
import type { SelectProps } from "./types";
import { tv } from "tailwind-variants";
import { ChevronDown } from "lucide-react";

const selectVariants = tv({
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

const labelVariants = tv({
  base: "font-medium text-sm text-font-primary",
  variants: {
    disabled: {
      true: "text-muted-foreground cursor-not-allowed",
      false: "",
    },
  },
});

const containerVariants = tv({
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

export { selectVariants };

export const Select = forwardRef<ComponentRef<"select">, SelectProps>(
  function Select(
    {
      label,
      labelPosition = "top",
      error,
      helperText,
      className,
      required,
      disabled,
      id: providedId,
      children,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const id = providedId || generatedId;

    const selectElement = (
      <div className="relative w-full">
        <select
          ref={ref}
          id={id}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className={selectVariants({
            error: !!error,
            className,
          })}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
          aria-hidden="true"
        />
      </div>
    );

    const labelElement = label ? (
      <label htmlFor={id} className={labelVariants({ disabled: !!disabled })}>
        {typeof label === "string" ? (
          <>
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </>
        ) : (
          <>
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </>
        )}
      </label>
    ) : null;

    return (
      <div className="w-full">
        <div className={containerVariants({ labelPosition })}>
          {labelPosition === "inline" ? (
            <>
              {labelElement}
              {selectElement}
            </>
          ) : (
            <>
              {labelElement}
              {selectElement}
            </>
          )}
        </div>
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p
            id={`${id}-helper`}
            className="mt-1.5 text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
