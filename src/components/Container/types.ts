import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { containerVariants } from "./variants";

type ContainerVariants = VariantProps<typeof containerVariants>;

export interface ContainerProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    ContainerVariants {
  as?: ElementType;
  className?: string;
}
