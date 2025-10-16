import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { headingVariants } from "./Heading";

type HeadingVariants = VariantProps<typeof headingVariants>;
export type HeadingLevel = NonNullable<HeadingVariants["level"]>;

export interface HeadingProps
  extends Omit<ComponentPropsWithoutRef<HeadingLevel>, "className" | "color">,
    HeadingVariants {
  level: HeadingLevel;
  className?: string;
}
