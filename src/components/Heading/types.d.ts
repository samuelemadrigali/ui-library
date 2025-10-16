import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";

type HeadingVariants = VariantProps<typeof headingVariants>;
type HeadingLevel = NonNullable<HeadingVariants["level"]>;

export interface HeadingProps
  extends Omit<ComponentPropsWithoutRef<HeadingLevel>, "className" | "color">,
    HeadingVariants {
  level: HeadingLevel;
  className?: string;
}
