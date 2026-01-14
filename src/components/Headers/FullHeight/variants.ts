import { tv } from "tailwind-variants";

export const headerFullHeightVariants = tv({
  slots: {
    header: [
      "w-full py-4 relative z-40",
      "border-b border-gray-200",
      "bg-white",
    ],
    inner: ["flex items-center justify-between"],
    logoSlot: ["flex items-center"],
    rightSlot: ["flex items-center"],
    overlay: [
      "fixed left-0 right-0 bottom-0 z-30",
      "bg-white",
      "overflow-y-auto",
    ],
    overlayContent: ["py-6"],
  },
  variants: {
    sticky: {
      true: {
        header: "sticky top-0",
      },
      false: {},
    },
    transparent: {
      true: {
        header: "bg-transparent border-transparent",
      },
      false: {},
    },
    animation: {
      fade: {
        overlay: "transition-opacity duration-300 ease-in-out",
      },
      slideDown: {
        overlay: "transition-all duration-300 ease-in-out",
      },
      slideUp: {
        overlay: "transition-all duration-300 ease-in-out",
      },
      slideLeft: {
        overlay: "transition-all duration-300 ease-in-out",
      },
      slideRight: {
        overlay: "transition-all duration-300 ease-in-out",
      },
      scale: {
        overlay: "transition-all duration-300 ease-in-out origin-top",
      },
      none: {
        overlay: "",
      },
    },
    isOpen: {
      true: {},
      false: {
        overlay: "pointer-events-none",
      },
    },
  },
  compoundVariants: [
    // Fade animation
    { animation: "fade", isOpen: true, class: { overlay: "opacity-100" } },
    { animation: "fade", isOpen: false, class: { overlay: "opacity-0" } },
    // Slide Down animation
    {
      animation: "slideDown",
      isOpen: true,
      class: { overlay: "opacity-100 translate-y-0" },
    },
    {
      animation: "slideDown",
      isOpen: false,
      class: { overlay: "opacity-0 -translate-y-4" },
    },
    // Slide Up animation
    {
      animation: "slideUp",
      isOpen: true,
      class: { overlay: "opacity-100 translate-y-0" },
    },
    {
      animation: "slideUp",
      isOpen: false,
      class: { overlay: "opacity-0 translate-y-4" },
    },
    // Slide Left animation
    {
      animation: "slideLeft",
      isOpen: true,
      class: { overlay: "opacity-100 translate-x-0" },
    },
    {
      animation: "slideLeft",
      isOpen: false,
      class: { overlay: "opacity-0 translate-x-full" },
    },
    // Slide Right animation
    {
      animation: "slideRight",
      isOpen: true,
      class: { overlay: "opacity-100 translate-x-0" },
    },
    {
      animation: "slideRight",
      isOpen: false,
      class: { overlay: "opacity-0 -translate-x-full" },
    },
    // Scale animation
    {
      animation: "scale",
      isOpen: true,
      class: { overlay: "opacity-100 scale-y-100" },
    },
    {
      animation: "scale",
      isOpen: false,
      class: { overlay: "opacity-0 scale-y-0" },
    },
    // None - no animation
    { animation: "none", isOpen: true, class: { overlay: "opacity-100" } },
    { animation: "none", isOpen: false, class: { overlay: "opacity-0" } },
  ],
  defaultVariants: {
    sticky: true,
    transparent: false,
    isOpen: false,
    animation: "slideDown",
  },
});
