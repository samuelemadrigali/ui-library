"use client";

import { type ComponentRef, forwardRef, useId } from "react";
import type { InputProps } from "./types";
import { inputVariants, labelVariants, containerVariants } from "./variants";

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
