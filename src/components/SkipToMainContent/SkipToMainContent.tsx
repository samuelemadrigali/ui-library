"use client";

import type { ComponentRef, MouseEvent, KeyboardEvent } from "react";
import type { SkipToMainContentProps } from "./types";
import { forwardRef, useCallback } from "react";
import { skipToMainContentVariants } from "./variants";

export const SkipToMainContent = forwardRef<
  ComponentRef<"a">,
  SkipToMainContentProps
>(function SkipToMainContent({ text, targetId, className, ...props }, ref) {
  const handleSkip = useCallback(
    (e: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus();
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [targetId]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === "Enter") {
        handleSkip(e);
      }
    },
    [handleSkip]
  );

  return (
    <a
      ref={ref}
      tabIndex={0}
      href={`#${targetId}`}
      onClick={handleSkip}
      onKeyDown={handleKeyDown}
      className={skipToMainContentVariants({ className })}
      {...props}
    >
      {text}
    </a>
  );
});

SkipToMainContent.displayName = "SkipToMainContent";
