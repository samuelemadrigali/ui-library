import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "separated"],
    },
    color: {
      control: "select",
      options: ["primary", "accent", "neutral"],
    },
    type: {
      control: "select",
      options: ["single"],
    },
    collapsible: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    color: "neutral",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1" title="Is it accessible?" color="neutral">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItem>
        <AccordionItem value="item-2" title="Is it styled?" color="neutral">
          Yes. It comes with default styles that can be easily customized.
        </AccordionItem>
        <AccordionItem value="item-3" title="Is it animated?" color="neutral">
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionItem>
      </>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    color: "neutral",
    collapsible: true,
    children: (
      <>
        <AccordionItem
          value="item-1"
          title="What is this component?"
          variant="ghost"
          color="neutral"
        >
          This is a ghost variant of the accordion with no border.
        </AccordionItem>
        <AccordionItem
          value="item-2"
          title="When should I use it?"
          variant="ghost"
          color="neutral"
        >
          Use this when you want a minimal, borderless accordion style.
        </AccordionItem>
        <AccordionItem
          value="item-3"
          title="Can I customize it?"
          variant="ghost"
          color="neutral"
        >
          Yes, you can pass custom className to override styles.
        </AccordionItem>
      </>
    ),
  },
};

export const Separated: Story = {
  args: {
    variant: "separated",
    color: "neutral",
    collapsible: true,
    children: (
      <>
        <AccordionItem
          value="item-1"
          title="What makes this different?"
          variant="separated"
          color="neutral"
        >
          Each item has its own border and spacing between items.
        </AccordionItem>
        <AccordionItem
          value="item-2"
          title="When to use separated?"
          variant="separated"
          color="neutral"
        >
          Use this when you want visual separation between accordion items.
        </AccordionItem>
        <AccordionItem
          value="item-3"
          title="Is it responsive?"
          variant="separated"
          color="neutral"
        >
          Yes, all accordion variants are fully responsive.
        </AccordionItem>
      </>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "default",
    color: "neutral",
    collapsible: true,
    children: (
      <>
        <AccordionItem
          value="item-1"
          title="No chevron icon"
          color="neutral"
          icon={false}
        >
          This accordion item doesn't have a chevron icon.
        </AccordionItem>
        <AccordionItem
          value="item-2"
          title="Also no icon"
          color="neutral"
          icon={false}
        >
          You can disable the icon on individual items.
        </AccordionItem>
      </>
    ),
  },
};

export const WithDefaultValue: Story = {
  args: {
    variant: "default",
    color: "neutral",
    defaultValue: "item-2",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1" title="First item" color="neutral">
          This item is closed by default.
        </AccordionItem>
        <AccordionItem
          value="item-2"
          title="Second item (open by default)"
          color="neutral"
        >
          This item is open by default because defaultValue="item-2".
        </AccordionItem>
        <AccordionItem value="item-3" title="Third item" color="neutral">
          This item is closed by default.
        </AccordionItem>
      </>
    ),
  },
};

export const NonCollapsible: Story = {
  args: {
    variant: "default",
    color: "neutral",
    collapsible: false,
    defaultValue: "item-1",
    children: (
      <>
        <AccordionItem value="item-1" title="Always one open" color="neutral">
          With collapsible=false, at least one item must remain open.
        </AccordionItem>
        <AccordionItem
          value="item-2"
          title="Click another to switch"
          color="neutral"
        >
          Clicking this will close the other and open this one.
        </AccordionItem>
        <AccordionItem
          value="item-3"
          title="Try clicking around"
          color="neutral"
        >
          You cannot close all items when collapsible is false.
        </AccordionItem>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Default - Neutral</h3>
        <Accordion variant="default" color="neutral" collapsible>
          <AccordionItem value="item-1" title="Question 1" color="neutral">
            Answer to question 1
          </AccordionItem>
          <AccordionItem value="item-2" title="Question 2" color="neutral">
            Answer to question 2
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Default - Primary</h3>
        <Accordion variant="default" color="primary" collapsible>
          <AccordionItem value="item-1" title="Question 1" color="primary">
            Answer to question 1
          </AccordionItem>
          <AccordionItem value="item-2" title="Question 2" color="primary">
            Answer to question 2
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Default - Accent</h3>
        <Accordion variant="default" color="accent" collapsible>
          <AccordionItem value="item-1" title="Question 1" color="accent">
            Answer to question 1
          </AccordionItem>
          <AccordionItem value="item-2" title="Question 2" color="accent">
            Answer to question 2
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Ghost - Primary</h3>
        <Accordion variant="ghost" color="primary" collapsible>
          <AccordionItem
            value="item-1"
            title="Question 1"
            variant="ghost"
            color="primary"
          >
            Answer to question 1
          </AccordionItem>
          <AccordionItem
            value="item-2"
            title="Question 2"
            variant="ghost"
            color="primary"
          >
            Answer to question 2
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold">Separated - Accent</h3>
        <Accordion variant="separated" color="accent" collapsible>
          <AccordionItem
            value="item-1"
            title="Question 1"
            variant="separated"
            color="accent"
          >
            Answer to question 1
          </AccordionItem>
          <AccordionItem
            value="item-2"
            title="Question 2"
            variant="separated"
            color="accent"
          >
            Answer to question 2
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
