import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    labelPosition: {
      control: "select",
      options: ["top", "inline"],
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message here...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Describe your issue...",
    helperText: "Please provide as much detail as possible",
  },
};

export const Required: Story = {
  args: {
    label: "Comments",
    placeholder: "Leave a comment...",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Feedback",
    placeholder: "Your feedback...",
    error: "Feedback must be at least 10 characters long",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Textarea",
    placeholder: "This is disabled",
    disabled: true,
    value: "This textarea is disabled and cannot be edited",
  },
};

export const WithRows: Story = {
  args: {
    label: "Large Text Area",
    placeholder: "Type something...",
    rows: 8,
  },
};

export const InlineLabel: Story = {
  args: {
    label: "Notes",
    labelPosition: "inline",
    placeholder: "Add your notes here...",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Textarea label="Default Textarea" placeholder="Enter text..." />

      <Textarea
        label="Required Field"
        placeholder="This is required"
        required
      />

      <Textarea
        label="With Helper Text"
        placeholder="Type here..."
        helperText="This is some helpful information"
      />

      <Textarea
        label="With Error"
        placeholder="Enter text..."
        error="This field has an error"
      />

      <Textarea
        label="Disabled"
        disabled
        placeholder="This is disabled"
        value="Disabled textarea content"
      />

      <Textarea label="Custom Rows" placeholder="Taller textarea..." rows={6} />

      <Textarea
        label="Inline Label"
        labelPosition="inline"
        placeholder="Short textarea"
        rows={3}
      />
    </div>
  ),
};
