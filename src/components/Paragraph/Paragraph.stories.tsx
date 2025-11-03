import type { Meta, StoryObj } from "@storybook/react-vite";

import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Paragraph",
  component: Paragraph,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl"],
    },
    color: {
      control: "select",
      options: [
        "fontPrimary",
        "fontSecondary",
        "primary",
        "accent",
        "white",
        "muted",
      ],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export const Default: Story = {
  args: {
    children: loremText,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: loremText,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: loremText,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: loremText,
  },
};

export const Bold: Story = {
  args: {
    weight: "bold",
    children: loremText,
  },
};

export const Semibold: Story = {
  args: {
    weight: "semibold",
    children: loremText,
  },
};

export const Light: Story = {
  args: {
    weight: "light",
    children: loremText,
  },
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
    children: loremText,
  },
};

export const AccentColor: Story = {
  args: {
    color: "accent",
    children: loremText,
  },
};

export const MutedColor: Story = {
  args: {
    color: "muted",
    children: loremText,
  },
};

export const Centered: Story = {
  args: {
    align: "center",
    children: loremText,
  },
};

export const RightAligned: Story = {
  args: {
    align: "right",
    children: loremText,
  },
};

export const Justified: Story = {
  args: {
    align: "justify",
    children: loremText,
  },
};

export const LargeBoldPrimary: Story = {
  args: {
    size: "lg",
    weight: "bold",
    color: "primary",
    children: loremText,
  },
};

export const SmallLightMuted: Story = {
  args: {
    size: "sm",
    weight: "light",
    color: "muted",
    children: loremText,
  },
};

export const ArticleExample: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph size="lg" weight="semibold" color="primary">
        Introduction paragraph with larger size and semibold weight to draw
        attention.
      </Paragraph>
      <Paragraph>{loremText}</Paragraph>
      <Paragraph>{loremText}</Paragraph>
      <Paragraph size="sm" color="muted">
        This is a footnote or caption text, smaller and muted for less emphasis.
      </Paragraph>
    </div>
  ),
};

export const MultipleVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph size="xs">Extra small paragraph</Paragraph>
      <Paragraph size="sm">Small paragraph</Paragraph>
      <Paragraph size="base">Base paragraph (default)</Paragraph>
      <Paragraph size="lg">Large paragraph</Paragraph>
      <Paragraph size="xl">Extra large paragraph</Paragraph>
    </div>
  ),
};

export const WeightComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph weight="light">Light weight text</Paragraph>
      <Paragraph weight="normal">Normal weight text (default)</Paragraph>
      <Paragraph weight="medium">Medium weight text</Paragraph>
      <Paragraph weight="semibold">Semibold weight text</Paragraph>
      <Paragraph weight="bold">Bold weight text</Paragraph>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph color="fontPrimary">
        Font Primary color (default) - {loremText}
      </Paragraph>
      <Paragraph color="fontSecondary">
        Font Secondary color - {loremText}
      </Paragraph>
      <Paragraph color="primary">Primary color - {loremText}</Paragraph>
      <Paragraph color="accent">Accent color - {loremText}</Paragraph>
      <Paragraph color="muted">Muted color - {loremText}</Paragraph>
      <div className="bg-gray-800 p-4">
        <Paragraph color="white">White color - {loremText}</Paragraph>
      </div>
    </div>
  ),
};

export const AlignmentVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph align="left">
        Left aligned text (default) - {loremText}
      </Paragraph>
      <Paragraph align="center">Center aligned text - {loremText}</Paragraph>
      <Paragraph align="right">Right aligned text - {loremText}</Paragraph>
      <Paragraph align="justify">
        Justified text - {loremText} {loremText}
      </Paragraph>
    </div>
  ),
};
