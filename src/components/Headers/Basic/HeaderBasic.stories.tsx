import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderBasic } from "./HeaderBasic";
import { Button } from "../../Button";
import { Heading } from "../../Heading";
import React from "react";

const meta: Meta<typeof HeaderBasic> = {
  title: "Headers/Basic",
  component: HeaderBasic,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sticky: {
      control: "boolean",
    },
    transparent: {
      control: "boolean",
    },
    breakpoint: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    animation: {
      control: "select",
      options: [
        "fade",
        "slideDown",
        "slideUp",
        "slideLeft",
        "slideRight",
        "scale",
        "none",
      ],
    },
    menuColor: {
      control: "select",
      options: ["default", "inverted"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Logo = () => <div className="text-xl font-bold text-gray-900">Brand</div>;

const DesktopMenu = () => (
  <div className="flex items-center gap-6">
    <a
      href="#home"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      Home
    </a>
    <a
      href="#about"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      About
    </a>
    <a
      href="#services"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      Services
    </a>
    <a
      href="#contact"
      className="text-gray-700 hover:text-gray-900 transition-colors"
    >
      Contact
    </a>
    <Button variant="fill" color="primary" size="sm">
      Get Started
    </Button>
  </div>
);

const MobileMenu = () => (
  <nav className="flex flex-col gap-4 py-4">
    <a
      href="#home"
      className="text-lg font-medium hover:text-gray-600 transition-colors py-2"
    >
      Home
    </a>
    <a
      href="#about"
      className="text-lg font-medium hover:text-gray-600 transition-colors py-2"
    >
      About
    </a>
    <a
      href="#services"
      className="text-lg font-medium hover:text-gray-600 transition-colors py-2"
    >
      Services
    </a>
    <a
      href="#contact"
      className="text-lg font-medium hover:text-gray-600 transition-colors py-2"
    >
      Contact
    </a>
    <div className="mt-4 flex flex-col gap-2">
      <Button variant="fill" color="primary" className="w-full">
        Get Started
      </Button>
      <Button variant="outline" color="neutral" className="w-full">
        Learn More
      </Button>
    </div>
  </nav>
);

export const Default: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    mobileMenu: <MobileMenu />,
    breakpoint: "lg",
  },
  render: (args) => (
    <div>
      <HeaderBasic {...args} />
      <main className="p-8">
        <Heading level="h1">Welcome to our site</Heading>
        <p className="mt-4">
          This is a demo page showing the HeaderBasic component. Resize the
          window to see the responsive behavior - the desktop menu will be
          replaced by a hamburger menu at the specified breakpoint.
        </p>
        <div className="h-[2000px] mt-8 bg-gradient-to-b from-gray-50 to-white">
          <p className="text-gray-500">Scroll to see sticky behavior...</p>
        </div>
      </main>
    </div>
  ),
};

export const MediumBreakpoint: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    mobileMenu: <MobileMenu />,
    breakpoint: "md",
  },
  render: (args) => (
    <div>
      <HeaderBasic {...args} />
      <main className="p-8">
        <Heading level="h1">Medium Breakpoint (768px)</Heading>
        <p className="mt-4">
          This example uses <code>breakpoint="md"</code> so the hamburger menu
          appears earlier.
        </p>
      </main>
    </div>
  ),
};

export const SlideLeftAnimation: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    mobileMenu: <MobileMenu />,
    animation: "slideLeft",
    breakpoint: "lg",
  },
  render: (args) => (
    <div>
      <HeaderBasic {...args} />
      <main className="p-8">
        <Heading level="h1">Slide Left Animation</Heading>
        <p className="mt-4">
          This example uses <code>animation="slideLeft"</code> for the mobile
          menu.
        </p>
      </main>
    </div>
  ),
};

export const Transparent: Story = {
  args: {
    logo: <div className="text-xl font-bold text-white">Brand</div>,
    desktopMenu: (
      <div className="flex items-center gap-6">
        <a
          href="#home"
          className="text-white/90 hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white/90 hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#services"
          className="text-white/90 hover:text-white transition-colors"
        >
          Services
        </a>
        <Button
          variant="outline"
          color="neutral"
          size="sm"
          className="border-white text-white hover:bg-white/10"
        >
          Contact
        </Button>
      </div>
    ),
    mobileMenu: <MobileMenu />,
    transparent: true,
    menuColor: "inverted",
  },
  render: (args) => (
    <div>
      <div
        className="relative"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <HeaderBasic {...args} />
        <div className="px-8 py-24 text-white">
          <Heading level="h1" className="text-white">
            Hero Section
          </Heading>
          <p className="mt-4 text-white/90 max-w-2xl">
            This example shows a transparent header over a hero section.
          </p>
        </div>
      </div>
      <main className="p-8 h-[1000px] bg-white">
        <Heading level="h2">Content Section</Heading>
        <p className="mt-4 text-gray-600">More content goes here...</p>
      </main>
    </div>
  ),
};

export const SameMenuForBoth: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    // mobileMenu not provided - will use desktopMenu
    breakpoint: "lg",
  },
  render: (args) => (
    <div>
      <HeaderBasic {...args} />
      <main className="p-8">
        <Heading level="h1">Same Menu for Desktop and Mobile</Heading>
        <p className="mt-4">
          When <code>mobileMenu</code> is not provided, the component uses{" "}
          <code>desktopMenu</code> for both views.
        </p>
      </main>
    </div>
  ),
};

export const WithCallbacks: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    mobileMenu: <MobileMenu />,
  },
  render: function CallbacksExample(args) {
    const [lastEvent, setLastEvent] = React.useState<string>("none");

    return (
      <div>
        <HeaderBasic
          {...args}
          onMenuOpen={() => setLastEvent("onMenuOpen")}
          onMenuOpened={() => setLastEvent("onMenuOpened")}
          onMenuClose={() => setLastEvent("onMenuClose")}
          onMenuClosed={() => setLastEvent("onMenuClosed")}
        />
        <main className="p-8">
          <Heading level="h1">Menu Callbacks</Heading>
          <p className="mt-4">
            Last event triggered:{" "}
            <strong className="text-blue-600">{lastEvent}</strong>
          </p>
          <p className="mt-2 text-gray-600">
            Open/close the mobile menu to see events fire.
          </p>
        </main>
      </div>
    );
  },
};

export const Controlled: Story = {
  args: {
    logo: <Logo />,
    desktopMenu: <DesktopMenu />,
    mobileMenu: <MobileMenu />,
  },
  render: function ControlledExample(args) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <HeaderBasic {...args} isMenuOpen={isOpen} onMenuToggle={setIsOpen} />
        <main className="p-8">
          <Heading level="h1">Controlled Menu State</Heading>
          <p className="mt-4 mb-4">
            Menu is: <strong>{isOpen ? "Open" : "Closed"}</strong>
          </p>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Open"} Menu Programmatically
          </Button>
        </main>
      </div>
    );
  },
};
