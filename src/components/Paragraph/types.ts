import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { paragraphVariants } from "./Paragraph";

type ParagraphVariants = VariantProps<typeof paragraphVariants>;

export interface ParagraphProps
  extends Omit<ComponentPropsWithoutRef<"p">, "color">,
    ParagraphVariants {
  className?: string;
}
