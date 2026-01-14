"use client";

import {
  type ComponentRef,
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import type { HeaderFullHeightProps } from "./types";
import { Container } from "../../Container";
import { HamburgerMenu } from "../../HamburgerMenu";
import { headerFullHeightVariants } from "./variants";

export const HeaderFullHeight = forwardRef<
  ComponentRef<"header">,
  HeaderFullHeightProps
>(function (
  {
    className,
    logo,
    rightSlot,
    menuContent,
    isMenuOpen: controlledIsMenuOpen,
    onMenuToggle,
    onMenuOpen,
    onMenuOpened,
    onMenuClose,
    onMenuClosed,
    menuColor = "default",
    sticky,
    transparent,
    animation = "slideDown",
    animationDuration = 300,
    children,
    ...props
  },
  ref
) {
  const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevIsOpenRef = useRef<boolean | undefined>(undefined);

  // Use controlled state if provided, otherwise use internal state
  const isMenuOpen = controlledIsMenuOpen ?? internalIsMenuOpen;

  const setIsMenuOpen = useCallback(
    (open: boolean) => {
      if (controlledIsMenuOpen === undefined) {
        setInternalIsMenuOpen(open);
      }
      onMenuToggle?.(open);
    },
    [controlledIsMenuOpen, onMenuToggle]
  );

  const handleToggle = useCallback(() => {
    const newState = !isMenuOpen;

    // Fire opening/closing callbacks immediately
    if (newState) {
      onMenuOpen?.();
    } else {
      onMenuClose?.();
    }

    setIsMenuOpen(newState);
  }, [isMenuOpen, setIsMenuOpen, onMenuOpen, onMenuClose]);

  // Handle animation end callbacks
  useEffect(() => {
    const wasOpen = prevIsOpenRef.current;
    prevIsOpenRef.current = isMenuOpen;

    // Skip initial render
    if (wasOpen === undefined) return;

    // Only trigger if state actually changed
    if (wasOpen === isMenuOpen) return;

    const timeoutId = setTimeout(() => {
      if (isMenuOpen) {
        onMenuOpened?.();
      } else {
        onMenuClosed?.();
      }
    }, animationDuration);

    return () => clearTimeout(timeoutId);
  }, [isMenuOpen, animationDuration, onMenuOpened, onMenuClosed]);

  // Measure header height for overlay positioning
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const styles = headerFullHeightVariants({
    sticky,
    transparent,
    animation,
    isOpen: isMenuOpen,
  });

  // Combine refs
  const setRefs = (node: HTMLElement | null) => {
    headerRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <>
      <header ref={setRefs} className={styles.header({ className })} {...props}>
        <Container>
          <div className={styles.inner()}>
            {/* Logo Slot */}
            <div className={styles.logoSlot()}>{logo}</div>

            {/* Right Slot or HamburgerMenu */}
            <div className={styles.rightSlot()}>
              {rightSlot || (
                <HamburgerMenu
                  isOpen={isMenuOpen}
                  onToggle={handleToggle}
                  color={menuColor}
                />
              )}
            </div>
          </div>
        </Container>

        {children}
      </header>

      {/* Menu Overlay - positioned below header */}
      {menuContent && (
        <div
          ref={overlayRef}
          className={styles.overlay()}
          style={{
            top: headerHeight,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          <Container>
            {/* Menu Content */}
            <div className={styles.overlayContent()}>{menuContent}</div>
          </Container>
        </div>
      )}
    </>
  );
});
