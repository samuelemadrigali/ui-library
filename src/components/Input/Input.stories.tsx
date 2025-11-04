import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "checkbox",
        "radio",
      ],
    },
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    type: "text",
    placeholder: "Choose a username",
    helperText: "Must be at least 3 characters long",
  },
};

export const Required: Story = {
  args: {
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    type: "text",
    placeholder: "This is disabled",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const InlineLabel: Story = {
  args: {
    label: "Remember me",
    type: "text",
    labelPosition: "inline",
    placeholder: "Some text",
  },
};

export const Checkbox: Story = {
  args: {
    label: "I agree to the terms and conditions",
    type: "checkbox",
  },
};

export const CheckboxRequired: Story = {
  args: {
    label: "I agree to the terms and conditions",
    type: "checkbox",
    required: true,
  },
};

export const Radio: Story = {
  args: {
    label: "Accept",
    type: "radio",
    name: "choice",
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input label="Text Input" type="text" placeholder="Enter text" />
      <Input label="Email Input" type="email" placeholder="email@example.com" />
      <Input label="Password Input" type="password" placeholder="••••••••" />
      <Input label="Number Input" type="number" placeholder="123" />
      <Input
        label="Required Field"
        type="text"
        placeholder="This is required"
        required
      />
      <Input
        label="With Helper Text"
        type="text"
        helperText="This is some helpful text"
      />
      <Input label="With Error" type="text" error="This field has an error" />
      <Input label="Disabled" type="text" disabled placeholder="Disabled" />
      <Input label="I agree to terms" type="checkbox" />
      <Input label="Accept option" type="radio" />
    </div>
  ),
};
