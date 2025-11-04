import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Country",
    children: (
      <>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Language",
    helperText: "Choose your preferred language",
    children: (
      <>
        <option value="">Select a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    label: "Gender",
    required: true,
    children: (
      <>
        <option value="">Please select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="prefer-not">Prefer not to say</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Age Range",
    error: "Please select your age range",
    children: (
      <>
        <option value="">Select age range</option>
        <option value="18-24">18-24</option>
        <option value="25-34">25-34</option>
        <option value="35-44">35-44</option>
        <option value="45+">45+</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    disabled: true,
    children: (
      <>
        <option value="">This is disabled</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const InlineLabel: Story = {
  args: {
    label: "Status",
    labelPosition: "inline",
    children: (
      <>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="pending">Pending</option>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Select label="Default Select">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>

      <Select label="Required Field" required>
        <option value="">Select required</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </Select>

      <Select label="With Helper Text" helperText="This is helpful information">
        <option value="">Choose one</option>
        <option value="x">Option X</option>
        <option value="y">Option Y</option>
      </Select>

      <Select label="With Error" error="This field has an error">
        <option value="">Select value</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </Select>

      <Select label="Disabled" disabled>
        <option value="">Disabled select</option>
        <option value="1">Option 1</option>
      </Select>

      <Select label="Inline Label" labelPosition="inline">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </Select>
    </div>
  ),
};
