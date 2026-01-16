import type { Meta, StoryObj } from "@storybook/react";
import { SkipToMainContent } from "./SkipToMainContent";

const meta: Meta<typeof SkipToMainContent> = {
  title: "SkipToMainContent",
  component: SkipToMainContent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "An accessible skip link that allows keyboard users to bypass navigation and jump directly to the main content. The link is visually hidden until it receives focus.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text to display in the skip link",
    },
    targetId: {
      control: "text",
      description: "The ID of the target element to skip to (without #)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipToMainContent>;

export const Default: Story = {
  args: {
    text: "Skip to main content",
    targetId: "main-content",
  },
  render: (args) => (
    <div className="min-h-screen">
      <SkipToMainContent {...args} />
      <header className="bg-neutral-100 p-4">
        <nav>
          <p className="text-sm text-neutral-600">
            Press <kbd className="rounded bg-neutral-200 px-1">Tab</kbd> to see
            the skip link appear
          </p>
        </nav>
      </header>
      <main id="main-content" className="p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-2">
          This is the main content area. When the skip link is activated, focus
          will move here.
        </p>
      </main>
    </div>
  ),
};

export const ItalianText: Story = {
  args: {
    text: "Vai al contenuto principale",
    targetId: "contenuto-principale",
  },
  render: (args) => (
    <div className="min-h-screen">
      <SkipToMainContent {...args} />
      <header className="bg-neutral-100 p-4">
        <nav>
          <p className="text-sm text-neutral-600">
            Premi <kbd className="rounded bg-neutral-200 px-1">Tab</kbd> per
            vedere il link di salto
          </p>
        </nav>
      </header>
      <main id="contenuto-principale" className="p-4">
        <h1 className="text-2xl font-bold">Contenuto Principale</h1>
        <p className="mt-2">
          Questa è l'area del contenuto principale. Quando il link di salto
          viene attivato, il focus si sposterà qui.
        </p>
      </main>
    </div>
  ),
};
