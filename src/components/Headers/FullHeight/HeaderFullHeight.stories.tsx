import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderFullHeight } from "./HeaderFullHeight";
import { Button } from "../../Button";
import { Heading } from "../../Heading";

const meta: Meta<typeof HeaderFullHeight> = {
  title: "Headers/FullHeight",
  component: HeaderFullHeight,
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
    menuColor: {
      control: "select",
      options: ["default", "inverted"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Logo = () => <div className="text-xl font-bold text-gray-900">Brand</div>;

const MenuContent = () => (
  <nav className="flex flex-col gap-6 py-12">
    <a
      href="#home"
      className="text-3xl font-semibold hover:text-gray-600 transition-colors"
    >
      Home
    </a>
    <a
      href="#about"
      className="text-3xl font-semibold hover:text-gray-600 transition-colors"
    >
      About
    </a>
    <a
      href="#services"
      className="text-3xl font-semibold hover:text-gray-600 transition-colors"
    >
      Services
    </a>
    <a
      href="#contact"
      className="text-3xl font-semibold hover:text-gray-600 transition-colors"
    >
      Contact
    </a>
    <div className="mt-8 flex gap-4">
      <Button variant="fill" color="primary">
        Get Started
      </Button>
      <Button variant="outline" color="neutral">
        Learn More
      </Button>
    </div>
  </nav>
);

export const Default: Story = {
  args: {
    logo: <Logo />,
    menuContent: <MenuContent />,
  },
  render: (args) => (
    <div>
      <HeaderFullHeight {...args} />
      <main className="p-8">
        <Heading level="h1">Welcome to our site</Heading>
        <p className="mt-4">
          This is a demo page showing the HeaderFullHeight component. Click the
          hamburger menu to see the fullscreen overlay.
        </p>
        <div className="h-[2000px] mt-8 bg-gradient-to-b from-gray-50 to-white">
          <p className="text-gray-500">Scroll to see sticky behavior...</p>
        </div>
      </main>
    </div>
  ),
};

export const Transparent: Story = {
  args: {
    logo: <div className="text-xl font-bold text-white">Brand</div>,
    menuContent: <MenuContent />,
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
        <HeaderFullHeight {...args} />
        <div className="px-8 py-24 text-white">
          <Heading level="h1" className="text-white">
            Hero Section
          </Heading>
          <p className="mt-4 text-white/90 max-w-2xl">
            This example shows a transparent header over a hero section. The
            header becomes visible on scroll.
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

export const WithCustomRightSlot: Story = {
  args: {
    logo: <Logo />,
    rightSlot: (
      <div className="flex gap-2">
        <Button variant="outline" color="neutral" size="sm">
          Login
        </Button>
        <Button variant="fill" color="primary" size="sm">
          Sign Up
        </Button>
      </div>
    ),
  },
  render: (args) => (
    <div>
      <HeaderFullHeight {...args} />
      <main className="p-8">
        <Heading level="h1">Custom Right Slot</Heading>
        <p className="mt-4">
          This example shows custom content on the right instead of the
          hamburger menu.
        </p>
      </main>
    </div>
  ),
};

export const ControlledMenu: Story = {
  args: {
    logo: <Logo />,
    menuContent: <MenuContent />,
  },
  render: function ControlledExample(args) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <HeaderFullHeight
          {...args}
          isMenuOpen={isOpen}
          onMenuToggle={setIsOpen}
        />
        <main className="p-8">
          <Heading level="h1">Controlled Menu State</Heading>
          <p className="mt-4 mb-4">
            This example demonstrates controlled menu state. Current state:{" "}
            <strong>{isOpen ? "Open" : "Closed"}</strong>
          </p>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Close" : "Open"} Menu Programmatically
          </Button>
        </main>
      </div>
    );
  },
};

// Add React import for the controlled example
import React from "react";
