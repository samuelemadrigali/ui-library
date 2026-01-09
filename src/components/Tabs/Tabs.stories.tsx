import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences here.
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-muted-foreground">
          Change your password and security settings.
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-muted-foreground">
          Configure your application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const FillPrimary: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="fill">
        <TabsTrigger value="overview" variant="fill" colorScheme="primary">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="fill" colorScheme="primary">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="fill" colorScheme="primary">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            This is the overview tab content with detailed information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View your analytics data and insights here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and download reports from this section.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const FillAccent: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="fill">
        <TabsTrigger value="overview" variant="fill" colorScheme="accent">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="fill" colorScheme="accent">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="fill" colorScheme="accent">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            This is the overview tab content with detailed information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View your analytics data and insights here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and download reports from this section.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const FillNeutral: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="fill">
        <TabsTrigger value="overview" variant="fill" colorScheme="neutral">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="fill" colorScheme="neutral">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="fill" colorScheme="neutral">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm text-muted-foreground">
            This is the overview tab content with detailed information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View your analytics data and insights here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Reports</h3>
          <p className="text-sm text-muted-foreground">
            Generate and download reports from this section.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="admin" disabled>
          Admin
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <p className="text-sm text-muted-foreground">
          Welcome to the home tab.
        </p>
      </TabsContent>
      <TabsContent value="profile">
        <p className="text-sm text-muted-foreground">
          View your profile information.
        </p>
      </TabsContent>
      <TabsContent value="admin">
        <p className="text-sm text-muted-foreground">Admin panel (disabled).</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-sm text-muted-foreground">Manage your settings.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  render: () => (
    <Tabs defaultValue="tab1" activationMode="manual">
      <TabsList>
        <TabsTrigger value="tab1">Manual Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Manual Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Manual Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Manual Activation</h3>
          <p className="text-sm text-muted-foreground">
            Use Arrow keys to navigate between tabs, then press Enter or Space
            to activate.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
          <p className="text-sm text-muted-foreground">
            This tab was activated manually with Enter or Space.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
          <p className="text-sm text-muted-foreground">
            Manual activation improves keyboard navigation control.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalOrientation: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical" className="flex gap-4">
      <TabsList variant="default">
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Account</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="tab1">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Profile</h3>
            <p className="text-sm text-muted-foreground">
              Use Up/Down arrow keys to navigate vertical tabs.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Account</h3>
            <p className="text-sm text-muted-foreground">
              Vertical orientation changes keyboard navigation.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure your preferences here.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">
          Default Variant (Underline)
        </h3>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">First</TabsTrigger>
            <TabsTrigger value="tab2">Second</TabsTrigger>
            <TabsTrigger value="tab3">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground">First tab content</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground">Second tab content</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground">Third tab content</p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Fill Variant - Primary</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="fill">
            <TabsTrigger value="tab1" variant="fill" colorScheme="primary">
              First
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="fill" colorScheme="primary">
              Second
            </TabsTrigger>
            <TabsTrigger value="tab3" variant="fill" colorScheme="primary">
              Third
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground">First tab content</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground">Second tab content</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground">Third tab content</p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Fill Variant - Accent</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="fill">
            <TabsTrigger value="tab1" variant="fill" colorScheme="accent">
              First
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="fill" colorScheme="accent">
              Second
            </TabsTrigger>
            <TabsTrigger value="tab3" variant="fill" colorScheme="accent">
              Third
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground">First tab content</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground">Second tab content</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground">Third tab content</p>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Fill Variant - Neutral</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="fill">
            <TabsTrigger value="tab1" variant="fill" colorScheme="neutral">
              First
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="fill" colorScheme="neutral">
              Second
            </TabsTrigger>
            <TabsTrigger value="tab3" variant="fill" colorScheme="neutral">
              Third
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-sm text-muted-foreground">First tab content</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-sm text-muted-foreground">Second tab content</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-sm text-muted-foreground">Third tab content</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
