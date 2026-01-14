# @samuelemadrigali/ui-library - Component Documentation

> A React + Tailwind CSS component library optimized for Next.js applications.
> This documentation is designed for both developers and AI agents.

## Quick Start

```bash
npm install @samuelemadrigali/ui-library
```

### Required Peer Dependencies

```bash
npm install react react-dom tailwindcss lucide-react
```

### Import Components

```tsx
import {
  Button,
  Heading,
  Paragraph,
  Container,
  Grid,
  GridColumn,
  Input,
  Select,
  Textarea,
  Alert,
  Accordion,
  AccordionItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  HamburgerMenu,
  HeaderBasic,
  HeaderFullHeight,
} from "@samuelemadrigali/ui-library";
```

---

## Components Overview

### Layout Components

| Component    | Description                    | Use Case                          |
| ------------ | ------------------------------ | --------------------------------- |
| `Container`  | Max-width wrapper with padding | Page sections, content containers |
| `Grid`       | CSS Grid layout                | Multi-column layouts, card grids  |
| `GridColumn` | Grid child with span control   | Column-based layouts              |

### Typography Components

| Component   | Description               | Use Case                     |
| ----------- | ------------------------- | ---------------------------- |
| `Heading`   | Semantic headings (h1-h6) | Page titles, section headers |
| `Paragraph` | Text paragraphs           | Body text, descriptions      |

### Form Components

| Component  | Description           | Use Case               |
| ---------- | --------------------- | ---------------------- |
| `Input`    | Text input field      | Forms, search, filters |
| `Select`   | Dropdown select       | Forms, filters         |
| `Textarea` | Multi-line text input | Comments, messages     |
| `Button`   | Interactive button    | Actions, navigation    |

### Feedback Components

| Component   | Description         | Use Case                       |
| ----------- | ------------------- | ------------------------------ |
| `Alert`     | Contextual messages | Success/error/warning messages |
| `Accordion` | Collapsible content | FAQs, expandable sections      |
| `Tabs`      | Tabbed interface    | Content organization           |

### Navigation Components

| Component          | Description             | Use Case             |
| ------------------ | ----------------------- | -------------------- |
| `HeaderBasic`      | Responsive header       | Main navigation      |
| `HeaderFullHeight` | Full-screen menu header | Immersive navigation |
| `HamburgerMenu`    | Menu toggle button      | Mobile navigation    |

---

## Component Details & Examples

### Button

Interactive button with multiple variants, colors, and icon support.

```tsx
import { Button } from "@samuelemadrigali/ui-library";
import { ArrowRight, Download, Trash2 } from "lucide-react";

// Variants: fill (default), outline, link
// Colors: primary, accent, danger, warning, success, neutral
// Sizes: sm, default, lg, xl, icon

// Basic buttons
<Button variant="fill" color="primary">Primary Action</Button>
<Button variant="outline" color="accent">Secondary Action</Button>
<Button variant="link" color="primary">Text Link</Button>

// With icons
<Button icon={ArrowRight} iconPosition="right">Continue</Button>
<Button icon={Download}>Download File</Button>

// Icon-only button (requires ariaLabel for accessibility)
<Button iconOnly icon={Trash2} color="danger" ariaLabel="Delete item" />

// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// As Next.js Link (using asChild)
import Link from "next/link";
<Button asChild variant="fill" color="primary">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>

// Disabled state
<Button disabled>Can't click me</Button>
```

### Heading

Semantic heading elements with consistent typography.

```tsx
import { Heading } from "@samuelemadrigali/ui-library";

// Levels: h1, h2, h3, h4, h5, h6
<Heading level="h1">Page Title</Heading>
<Heading level="h2">Section Title</Heading>
<Heading level="h3">Subsection Title</Heading>

// With custom styling
<Heading level="h2" className="text-center text-primary">
  Centered Primary Heading
</Heading>
```

### Paragraph

Text paragraphs with size variants.

```tsx
import { Paragraph } from "@samuelemadrigali/ui-library";

// Sizes: sm, default, lg, xl
<Paragraph>Default paragraph text.</Paragraph>
<Paragraph size="sm">Small caption text.</Paragraph>
<Paragraph size="lg">Larger body text for emphasis.</Paragraph>
<Paragraph size="xl">Lead paragraph for introductions.</Paragraph>
```

### Container

Centered container with max-width constraints.

```tsx
import { Container } from "@samuelemadrigali/ui-library";

// Basic usage
<Container>
  <h1>Page Content</h1>
  <p>Your content here...</p>
</Container>

// As semantic HTML element
<Container as="main">Main content</Container>
<Container as="section">Section content</Container>
<Container as="article">Article content</Container>
```

### Grid & GridColumn

Responsive CSS Grid layout system.

```tsx
import { Grid, GridColumn } from "@samuelemadrigali/ui-library";

// Basic 3-column grid
<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Responsive grid (mobile-first)
<Grid cols={1} md={{ cols: 2 }} lg={{ cols: 3 }} gap={6}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Grid>

// 12-column layout system
<Grid cols={12} gap={4}>
  <GridColumn span={8}>Main content (8/12)</GridColumn>
  <GridColumn span={4}>Sidebar (4/12)</GridColumn>
</Grid>

// Responsive column spans
<Grid cols={12}>
  <GridColumn span={12} md={{ span: 6 }} lg={{ span: 4 }}>
    Responsive card
  </GridColumn>
</Grid>

// Different horizontal and vertical gaps
<Grid cols={4} gapX={8} gapY={4}>
  <div>Item</div>
</Grid>
```

### Input

Text input field with label and validation support.

```tsx
import { Input } from "@samuelemadrigali/ui-library";

// Basic input
<Input label="Email" type="email" placeholder="Enter your email" />

// With error state
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

// With helper text
<Input label="Username" helperText="Choose a unique username" />

// Inline label
<Input label="Search" labelPosition="inline" placeholder="Search..." />

// Required field
<Input label="Name" required placeholder="Your name" />

// Controlled input
const [email, setEmail] = useState("");
<Input
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Select

Dropdown select with label and validation support.

```tsx
import { Select } from "@samuelemadrigali/ui-library";

// Basic select
<Select label="Country">
  <option value="">Choose a country...</option>
  <option value="it">Italy</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</Select>

// With error state
<Select label="Category" error="Please select a category">
  <option value="">Choose...</option>
  <option value="tech">Technology</option>
</Select>

// Controlled select
const [country, setCountry] = useState("");
<Select label="Country" value={country} onChange={(e) => setCountry(e.target.value)}>
  <option value="it">Italy</option>
</Select>
```

### Textarea

Multi-line text input with label and validation support.

```tsx
import { Textarea } from "@samuelemadrigali/ui-library";

// Basic textarea
<Textarea label="Message" placeholder="Type your message..." rows={4} />

// With error state
<Textarea label="Description" error="Description is required" />

// With helper text
<Textarea label="Bio" helperText="Max 500 characters" maxLength={500} />

// Controlled textarea
const [message, setMessage] = useState("");
<Textarea
  label="Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

### Alert

Contextual feedback messages with icon and dismiss support.

```tsx
import { Alert } from "@samuelemadrigali/ui-library";
import { AlertTriangle } from "lucide-react";

// Variants: success, error, warning, info
<Alert variant="success">Your changes have been saved!</Alert>
<Alert variant="error">Something went wrong.</Alert>
<Alert variant="warning">Please review your input.</Alert>
<Alert variant="info">New features are available!</Alert>

// With default icon (based on variant)
<Alert variant="success" icon>Operation completed successfully!</Alert>

// With custom icon
<Alert variant="warning" icon={AlertTriangle}>
  Custom warning message
</Alert>

// Dismissible alert
const [showAlert, setShowAlert] = useState(true);
{showAlert && (
  <Alert variant="info" dismissible onDismiss={() => setShowAlert(false)}>
    This alert can be dismissed.
  </Alert>
)}
```

### Accordion

Collapsible content sections.

```tsx
import { Accordion, AccordionItem } from "@samuelemadrigali/ui-library";

// Basic accordion
<Accordion defaultValue="item-1">
  <AccordionItem value="item-1" title="What is this library?">
    A React + Tailwind component library for Next.js apps.
  </AccordionItem>
  <AccordionItem value="item-2" title="How do I install it?">
    Run npm install @samuelemadrigali/ui-library
  </AccordionItem>
</Accordion>

// Collapsible (can close all items)
<Accordion collapsible defaultValue="item-1">
  <AccordionItem value="item-1" title="Collapsible section" icon>
    This section can be fully collapsed.
  </AccordionItem>
</Accordion>

// Controlled accordion
const [openItem, setOpenItem] = useState("faq-1");
<Accordion value={openItem} onValueChange={setOpenItem}>
  <AccordionItem value="faq-1" title="First FAQ">Answer 1</AccordionItem>
  <AccordionItem value="faq-2" title="Second FAQ">Answer 2</AccordionItem>
</Accordion>
```

### Tabs

Tabbed interface for content organization.

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@samuelemadrigali/ui-library";

// Basic tabs
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <h2>Account Settings</h2>
    <p>Manage your account information.</p>
  </TabsContent>
  <TabsContent value="settings">
    <h2>App Settings</h2>
    <p>Configure your preferences.</p>
  </TabsContent>
  <TabsContent value="notifications">
    <h2>Notification Preferences</h2>
    <p>Manage your notifications.</p>
  </TabsContent>
</Tabs>;

// Controlled tabs
const [tab, setTab] = useState("overview");
<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
</Tabs>;
```

### HamburgerMenu

Animated hamburger menu toggle button.

```tsx
import { HamburgerMenu } from "@samuelemadrigali/ui-library";

const [isOpen, setIsOpen] = useState(false);

<HamburgerMenu
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  openLabel="Open navigation"
  closeLabel="Close navigation"
/>;
```

### HeaderBasic

Responsive header with desktop/mobile menu support.

```tsx
import { HeaderBasic } from "@samuelemadrigali/ui-library";
import Link from "next/link";

// Basic responsive header
<HeaderBasic
  logo={
    <Link href="/">
      <img src="/logo.svg" alt="Logo" />
    </Link>
  }
  desktopMenu={
    <nav className="flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  }
  mobileMenu={
    <nav className="flex flex-col gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  }
  breakpoint="lg"
/>;

// Controlled mobile menu
const [menuOpen, setMenuOpen] = useState(false);
<HeaderBasic
  logo={<Logo />}
  desktopMenu={<DesktopNav />}
  mobileMenu={<MobileNav />}
  isMenuOpen={menuOpen}
  onMenuToggle={(open) => setMenuOpen(open)}
/>;
```

### HeaderFullHeight

Full-screen overlay menu header.

```tsx
import { HeaderFullHeight } from "@samuelemadrigali/ui-library";
import Link from "next/link";

<HeaderFullHeight
  logo={
    <Link href="/">
      <img src="/logo.svg" alt="Logo" />
    </Link>
  }
  menuContent={
    <nav className="flex flex-col items-center gap-8 text-4xl">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  }
/>;

// With controlled state and callbacks
const [isOpen, setIsOpen] = useState(false);
<HeaderFullHeight
  logo={<Logo />}
  menuContent={<FullscreenNav />}
  isMenuOpen={isOpen}
  onMenuToggle={setIsOpen}
  onMenuOpened={() => console.log("Menu fully open")}
  onMenuClosed={() => console.log("Menu fully closed")}
/>;
```

---

## Common Patterns

### Page Layout

```tsx
import {
  Container,
  Heading,
  Paragraph,
  Grid,
  GridColumn,
} from "@samuelemadrigali/ui-library";

export default function Page() {
  return (
    <Container as="main">
      <Heading level="h1">Page Title</Heading>
      <Paragraph size="lg">Introduction paragraph.</Paragraph>

      <Grid cols={1} md={{ cols: 2 }} lg={{ cols: 3 }} gap={6}>
        <Card>Content 1</Card>
        <Card>Content 2</Card>
        <Card>Content 3</Card>
      </Grid>
    </Container>
  );
}
```

### Contact Form

```tsx
import {
  Container,
  Heading,
  Input,
  Textarea,
  Select,
  Button,
  Alert,
} from "@samuelemadrigali/ui-library";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container>
      <Heading level="h2">Contact Us</Heading>

      {submitted && (
        <Alert variant="success" icon>
          Message sent successfully!
        </Alert>
      )}

      <form className="space-y-4">
        <Input label="Name" required placeholder="Your name" />
        <Input
          label="Email"
          type="email"
          required
          placeholder="your@email.com"
        />
        <Select label="Subject">
          <option value="">Select a subject...</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="other">Other</option>
        </Select>
        <Textarea label="Message" rows={5} placeholder="Your message..." />
        <Button type="submit" variant="fill" color="primary">
          Send Message
        </Button>
      </form>
    </Container>
  );
}
```

### FAQ Section

```tsx
import {
  Container,
  Heading,
  Accordion,
  AccordionItem,
} from "@samuelemadrigali/ui-library";

const faqs = [
  {
    q: "How do I get started?",
    a: "Install the package and import components.",
  },
  {
    q: "Is it compatible with Next.js?",
    a: "Yes, fully compatible with Next.js 13+.",
  },
  { q: "Can I customize styles?", a: "Yes, using Tailwind CSS classes." },
];

export default function FAQSection() {
  return (
    <Container as="section">
      <Heading level="h2">Frequently Asked Questions</Heading>
      <Accordion collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} title={faq.q} icon>
            {faq.a}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
```

---

## TypeScript Support

All components are fully typed. Import types alongside components:

```tsx
import type {
  ButtonProps,
  HeadingProps,
  ParagraphProps,
  ContainerProps,
  GridProps,
  GridColumnProps,
  InputProps,
  SelectProps,
  TextareaProps,
  AlertProps,
  AccordionProps,
  AccordionItemProps,
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
  HamburgerMenuProps,
  HeaderBasicProps,
  HeaderFullHeightProps,
} from "@samuelemadrigali/ui-library";
```

---

## Accessibility

All components follow WAI-ARIA guidelines:

- **Button**: Proper `button` semantics, keyboard navigation, disabled states
- **Accordion**: ARIA `expanded` states, keyboard navigation (Enter, Space, Arrow keys)
- **Tabs**: ARIA `tablist`, `tab`, `tabpanel` roles, automatic focus management
- **Alert**: `role="alert"` for important messages
- **HamburgerMenu**: Screen reader announcements, proper labeling
- **Form inputs**: Associated labels, error announcements

---

## Notes for AI Agents

When using this library to build interfaces:

1. **Always import components** from `@samuelemadrigali/ui-library`
2. **Use semantic Heading levels** (h1 once per page, then h2, h3, etc.)
3. **Provide accessible labels** for icon-only buttons (`ariaLabel` prop)
4. **Use controlled mode** when you need to sync state with other parts of the app
5. **Apply responsive props** for mobile-first design (`cols={1} md={{ cols: 2 }}`)
6. **Check variant options** in the component's TypeScript types for available choices
7. **Combine with Tailwind** classes via `className` prop for custom styling
