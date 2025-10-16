import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    color: {
      control: "select",
      options: ["primary", "accent", "white"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: "h1",
    color: "primary",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    color: "primary",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    color: "primary",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    level: "h4",
    color: "primary",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    level: "h5",
    color: "primary",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    level: "h6",
    color: "primary",
    children: "Heading 6",
  },
};

export const AccentColor: Story = {
  args: {
    level: "h2",
    color: "accent",
    children: "Accent Heading",
  },
};

export const WhiteColor: Story = {
  args: {
    level: "h2",
    color: "white",
    children: "White Heading",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
