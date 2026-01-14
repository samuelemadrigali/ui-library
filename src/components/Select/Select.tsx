"use client";

import { type ComponentRef, forwardRef, useId } from "react";
import type { SelectProps } from "./types";
import { ChevronDown } from "lucide-react";
import { selectVariants, labelVariants, containerVariants } from "./variants";

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
