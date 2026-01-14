"use client";

import { type ComponentRef, forwardRef, useId } from "react";
import type { TextareaProps } from "./types";
import { textareaVariants, labelVariants, containerVariants } from "./variants";

export const Textarea = forwardRef<ComponentRef<"textarea">, TextareaProps>(
  function Textarea(
    {
      label,
      labelPosition = "top",
      error,
      helperText,
      className,
      required,
      disabled,
      id: providedId,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const id = providedId || generatedId;

    const textareaElement = (
      <textarea
        ref={ref}
        id={id}
        disabled={disabled}
        required={required}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={textareaVariants({
          error: !!error,
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

    return (
      <div className="w-full">
        <div className={containerVariants({ labelPosition })}>
          {labelPosition === "inline" ? (
            <>
              {labelElement}
              {textareaElement}
            </>
          ) : (
            <>
              {labelElement}
              {textareaElement}
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

Textarea.displayName = "Textarea";
