"use client";

import { type ComponentRef, forwardRef, useId } from "react";
import type { InputProps } from "./types";
import { tv } from "tailwind-variants";

const inputVariants = tv({
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

export { inputVariants };

export const Input = forwardRef<ComponentRef<"input">, InputProps>(
  function Input(
    {
      label,
      labelPosition = "top",
      error,
      helperText,
      className,
      type = "text",
      required,
      disabled,
      id: providedId,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const id = providedId || generatedId;
    const isCheckboxOrRadio = type === "checkbox" || type === "radio";
    const inputType: "text" | "checkbox" | "radio" = isCheckboxOrRadio
      ? (type as "checkbox" | "radio")
      : "text";

    const inputElement = (
      <input
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={inputVariants({
          error: !!error,
          inputType,
          className,
        })}
        {...props}
      />
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

    const effectiveLabelPosition = isCheckboxOrRadio ? "inline" : labelPosition;

    return (
      <div className="w-full">
        <div
          className={containerVariants({
            labelPosition: effectiveLabelPosition,
          })}
        >
          {effectiveLabelPosition === "inline" && isCheckboxOrRadio ? (
            <>
              {inputElement}
              {labelElement}
            </>
          ) : effectiveLabelPosition === "inline" ? (
            <>
              {labelElement}
              {inputElement}
            </>
          ) : (
            <>
              {labelElement}
              {inputElement}
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

Input.displayName = "Input";
