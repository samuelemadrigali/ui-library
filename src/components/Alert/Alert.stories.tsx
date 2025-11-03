import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "./Alert";
import { Zap } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info", "neutral"],
    },
    icon: {
      control: "boolean",
    },
    dismissible: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully!",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "There was an error processing your request. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Please review your information before continuing.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "This is an informational message for your reference.",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "This is a neutral notification.",
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "info",
    icon: false,
    children: "This alert doesn't have an icon.",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
    children: "You can dismiss this alert by clicking the X button.",
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "warning",
    icon: Zap,
    children: "This alert uses a custom icon instead of the default one.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="success">
        <strong>Success!</strong> Your operation completed successfully.
      </Alert>
      <Alert variant="error">
        <strong>Error!</strong> Something went wrong. Please try again.
      </Alert>
      <Alert variant="warning">
        <strong>Warning!</strong> Please be cautious with this action.
      </Alert>
      <Alert variant="info">
        <strong>Info:</strong> Here's some helpful information.
      </Alert>
      <Alert variant="neutral">
        <strong>Note:</strong> This is a neutral notification.
      </Alert>
    </div>
  ),
};
