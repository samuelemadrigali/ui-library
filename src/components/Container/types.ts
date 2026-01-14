import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { containerVariants } from "./variants";

type ContainerVariants = VariantProps<typeof containerVariants>;

/**
 * Props for the Container component.
 * Provides consistent max-width and horizontal padding for content.
 *
 * @example
 * ```tsx
 * // Basic container
 * <Container>
 *   <h1>Page Content</h1>
 *   <p>Your content here...</p>
 * </Container>
 *
 * // Container with different max-width
 * <Container size="lg">
 *   <p>Large container content</p>
 * </Container>
 *
 * // Container as semantic element
 * <Container as="section">
 *   <h2>Section Content</h2>
 * </Container>
 *
 * // Container as main element
 * <Container as="main">
 *   <article>Main content</article>
 * </Container>
 * ```
 */
export interface ContainerProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    ContainerVariants {
  /**
   * The HTML element to render the container as.
   * Useful for semantic HTML structure.
   * @default "div"
   *
   * @example
   * ```tsx
   * <Container as="section">...</Container>
   * <Container as="main">...</Container>
   * <Container as="article">...</Container>
   * ```
   */
  as?: ElementType;

  /**
   * Additional CSS classes to apply to the container.
   */
  className?: string;
}
