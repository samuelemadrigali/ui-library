"use client";

import {
  type ComponentRef,
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import type { HeaderBasicProps } from "./types";
import { Container } from "../../Container";
import { HamburgerMenu } from "../../HamburgerMenu";
import { headerBasicVariants } from "./variants";

export const HeaderBasic = forwardRef<ComponentRef<"header">, HeaderBasicProps>(
  function (
    {
      className,
      logo,
      desktopMenu,
      mobileMenu,
      breakpoint = "lg",
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

    // Use mobileMenu if provided, otherwise fall back to desktopMenu
    const mobileMenuContent = mobileMenu ?? desktopMenu;

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

    // Close mobile menu when resizing above breakpoint
    useEffect(() => {
      const breakpointValues: Record<string, number> = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      };

      const handleResize = () => {
        const width = window.innerWidth;
        const breakpointWidth = breakpointValues[breakpoint] || 1024;

        if (width >= breakpointWidth && isMenuOpen) {
          setIsMenuOpen(false);
          onMenuClose?.();
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint, isMenuOpen, setIsMenuOpen, onMenuClose]);

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

    const styles = headerBasicVariants({
      sticky,
      transparent,
      animation,
      breakpoint,
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
        <header
          ref={setRefs}
          className={styles.header({ className })}
          {...props}
        >
          <Container>
            <div className={styles.inner()}>
              {/* Logo Slot */}
              <div className={styles.logoSlot()}>{logo}</div>

              {/* Desktop Navigation - visible above breakpoint */}
              <nav className={styles.desktopNav()}>{desktopMenu}</nav>

              {/* Mobile Menu Button - visible below breakpoint */}
              <div className={styles.mobileMenuButton()}>
                <HamburgerMenu
                  isOpen={isMenuOpen}
                  onToggle={handleToggle}
                  color={menuColor}
                />
              </div>
            </div>
          </Container>

          {children}
        </header>

        {/* Mobile Menu Overlay - positioned below header */}
        {mobileMenuContent && (
          <div
            ref={overlayRef}
            className={styles.overlay()}
            style={{
              top: headerHeight,
              transitionDuration: `${animationDuration}ms`,
            }}
          >
            <Container>
              {/* Mobile Menu Content */}
              <div className={styles.overlayContent()}>{mobileMenuContent}</div>
            </Container>
          </div>
        )}
      </>
    );
  }
);
