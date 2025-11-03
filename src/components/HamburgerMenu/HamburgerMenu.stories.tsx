import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { HamburgerMenu } from "./HambugerMenu";

const meta: Meta<typeof HamburgerMenu> = {
  title: "HamburgerMenu",
  component: HamburgerMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "inverted"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    isOpen: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isOpen: false,
    onToggle: () => console.log("Toggle clicked"),
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onToggle: () => console.log("Toggle clicked"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <HamburgerMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    );
  },
};

export const DefaultColor: Story = {
  args: {
    color: "default",
    isOpen: false,
    onToggle: () => console.log("Toggle clicked"),
  },
};

export const InvertedColor: Story = {
  args: {
    color: "inverted",
    isOpen: false,
    onToggle: () => console.log("Toggle clicked"),
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    isOpen: false,
    onToggle: () => console.log("Toggle clicked"),
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    isOpen: false,
    onToggle: () => console.log("Toggle clicked"),
  },
};
