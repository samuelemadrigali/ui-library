import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "outline", "link"],
    },
    color: {
      control: "select",
      options: ["primary", "accent", "danger", "warning", "success", "neutral"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "icon"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "fill",
    color: "primary",
    children: "Primary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "fill",
    color: "danger",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "primary",
    children: "Outline",
  },
};

export const Accent: Story = {
  args: {
    variant: "fill",
    color: "accent",
    children: "Accent",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    color: "primary",
    children: "Link Button",
  },
};

export const Success: Story = {
  args: {
    variant: "fill",
    color: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "fill",
    color: "warning",
    children: "Warning",
  },
};

export const Small: Story = {
  args: {
    variant: "fill",
    color: "primary",
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    variant: "fill",
    color: "primary",
    size: "lg",
    children: "Large",
  },
};

export const ExtraLarge: Story = {
  args: {
    variant: "fill",
    color: "primary",
    size: "xl",
    children: "Extra Large",
  },
};

export const Icon: Story = {
  args: {
    variant: "fill",
    color: "primary",
    size: "icon",
    children: "🔍",
  },
};

export const Disabled: Story = {
  args: {
    variant: "fill",
    color: "primary",
    disabled: true,
    children: "Disabled",
  },
};
