import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "./Container";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

const meta: Meta<typeof Container> = {
  title: "Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    padding: {
      control: "boolean",
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "main"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const contentExample = (
  <>
    <Heading level="h2" className="mb-4">
      Container Example
    </Heading>
    <Paragraph className="mb-4">
      This is an example of content inside a container. The container centers
      the content and provides a maximum width to improve readability and visual
      hierarchy.
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Paragraph>
  </>
);

export const Default: Story = {
  args: {
    children: contentExample,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: contentExample,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: contentExample,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: contentExample,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: contentExample,
  },
};

export const ExtraLarge2: Story = {
  args: {
    size: "2xl",
    children: contentExample,
  },
};

export const NoPadding: Story = {
  args: {
    padding: false,
    children: (
      <div className="border-2 border-dashed border-blue-300">
        {contentExample}
      </div>
    ),
  },
};

export const WithPadding: Story = {
  args: {
    padding: true,
    children: (
      <div className="border-2 border-dashed border-blue-300">
        {contentExample}
      </div>
    ),
  },
};

export const AsSection: Story = {
  args: {
    as: "section",
    children: contentExample,
  },
};

export const AsMain: Story = {
  args: {
    as: "main",
    children: contentExample,
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <Container size="sm">
        <div className="rounded bg-blue-100 p-4">
          <Heading level="h3" className="mb-2">
            Small Container
          </Heading>
          <Paragraph size="sm">max-w-3xl (~768px)</Paragraph>
        </div>
      </Container>

      <Container size="md">
        <div className="rounded bg-green-100 p-4">
          <Heading level="h3" className="mb-2">
            Medium Container
          </Heading>
          <Paragraph size="sm">max-w-5xl (~1024px)</Paragraph>
        </div>
      </Container>

      <Container size="lg">
        <div className="rounded bg-yellow-100 p-4">
          <Heading level="h3" className="mb-2">
            Large Container (default)
          </Heading>
          <Paragraph size="sm">max-w-6xl (~1152px)</Paragraph>
        </div>
      </Container>

      <Container size="xl">
        <div className="rounded bg-orange-100 p-4">
          <Heading level="h3" className="mb-2">
            Extra Large Container
          </Heading>
          <Paragraph size="sm">max-w-7xl (~1280px)</Paragraph>
        </div>
      </Container>

      <Container size="2xl">
        <div className="rounded bg-red-100 p-4">
          <Heading level="h3" className="mb-2">
            2XL Container
          </Heading>
          <Paragraph size="sm">max-w-screen-2xl (~1536px)</Paragraph>
        </div>
      </Container>
    </div>
  ),
};

export const NestedContainers: Story = {
  render: () => (
    <Container size="xl" className="bg-gray-50 py-8">
      <Heading level="h2" className="mb-4">
        Outer Container (XL)
      </Heading>
      <Paragraph className="mb-8">
        This is the outer container with extra large size.
      </Paragraph>

      <Container size="md" className="bg-white py-6 shadow-sm">
        <Heading level="h3" className="mb-4">
          Inner Container (MD)
        </Heading>
        <Paragraph>
          This is a nested container with medium size inside the outer
          container. Useful for creating focused content areas.
        </Paragraph>
      </Container>
    </Container>
  ),
};

export const PageLayout: Story = {
  render: () => (
    <>
      <header className="border-b bg-white py-4">
        <Container>
          <Heading level="h1">Website Header</Heading>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <Heading level="h2" className="mb-4">
            Main Content Area
          </Heading>
          <Paragraph className="mb-4">
            This demonstrates how containers are typically used in page layouts
            to maintain consistent content width across different sections.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Container>
      </main>

      <footer className="border-t bg-gray-100 py-8">
        <Container>
          <Paragraph size="sm" color="muted">
            © 2025 Your Company. All rights reserved.
          </Paragraph>
        </Container>
      </footer>
    </>
  ),
};

export const ArticleLayout: Story = {
  render: () => (
    <article className="py-8">
      <Container size="md">
        <Heading level="h1" className="mb-2">
          Article Title
        </Heading>
        <Paragraph size="sm" color="muted" className="mb-8">
          Published on November 3, 2025
        </Paragraph>

        <Paragraph className="mb-4">
          This is an example of an article layout using a medium-sized
          container. The narrower width improves readability for long-form
          content.
        </Paragraph>

        <Paragraph className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>

        <Paragraph className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Paragraph>
      </Container>
    </article>
  ),
};

export const ResponsiveWidth: Story = {
  render: () => (
    <div className="space-y-8">
      <Container size="sm">
        <div className="rounded border-2 border-dashed border-blue-400 bg-blue-50 p-8 text-center">
          <Heading level="h3" className="mb-2">
            Resize your browser
          </Heading>
          <Paragraph>
            Notice how the container maintains its max-width and centers the
            content. On smaller screens, the padding adjusts automatically.
          </Paragraph>
        </div>
      </Container>
    </div>
  ),
};
