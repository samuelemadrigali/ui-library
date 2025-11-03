import type { Meta, StoryObj } from "@storybook/react-vite";

import { Grid } from "./Grid";
import { GridColumn } from "../GridColumn";

const meta: Meta<typeof Grid> = {
  title: "Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    gapX: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    gapY: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
    as: {
      control: "select",
      options: ["div", "section", "article"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const gridItem = (content: string) => (
  <div className="rounded border border-blue-300 bg-blue-100 p-4 text-center">
    {content}
  </div>
);

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 4,
    children: [gridItem("Column 1"), gridItem("Column 2")],
  },
};

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: [
      gridItem("Column 1"),
      gridItem("Column 2"),
      gridItem("Column 3"),
    ],
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 4,
    children: [
      gridItem("Column 1"),
      gridItem("Column 2"),
      gridItem("Column 3"),
      gridItem("Column 4"),
    ],
  },
};

export const ResponsiveGrid: Story = {
  args: {
    cols: 1,
    sm: { cols: 2 },
    md: { cols: 3 },
    lg: { cols: 4 },
    gap: 4,
    children: [
      gridItem("Item 1"),
      gridItem("Item 2"),
      gridItem("Item 3"),
      gridItem("Item 4"),
      gridItem("Item 5"),
      gridItem("Item 6"),
    ],
  },
};

export const ResponsiveGap: Story = {
  args: {
    cols: 2,
    gap: 2,
    sm: { gap: 4 },
    md: { gap: 6 },
    lg: { gap: 8 },
    children: [
      gridItem("Small gap on mobile"),
      gridItem("Progressively larger"),
      gridItem("Gap on bigger screens"),
      gridItem("Responsive spacing"),
    ],
  },
};

export const GapXAndGapY: Story = {
  args: {
    cols: 2,
    gapX: 2,
    gapY: 8,
    children: [
      gridItem("Small horizontal gap"),
      gridItem("Large vertical gap"),
      gridItem("Different X and Y spacing"),
      gridItem("Useful for specific layouts"),
    ],
  },
};

export const ResponsiveGapXY: Story = {
  args: {
    cols: 1,
    sm: { cols: 2 },
    lg: { cols: 3, gapX: 6, gapY: 8 },
    gapX: 2,
    gapY: 4,
    children: [
      gridItem("Mobile: small gaps"),
      gridItem("Desktop: larger gaps"),
      gridItem("Responsive X/Y spacing"),
      gridItem("Perfect control"),
      gridItem("For complex layouts"),
      gridItem("Try resizing the viewport"),
    ],
  },
};

export const WithGridColumns: Story = {
  args: {
    cols: 4,
    gap: 6,
    children: [
      <GridColumn key="1" span={2}>
        {gridItem("Spans 2 columns")}
      </GridColumn>,
      <GridColumn key="2" span={1}>
        {gridItem("Spans 1 column")}
      </GridColumn>,
      <GridColumn key="3" span={1}>
        {gridItem("Spans 1 column")}
      </GridColumn>,
    ],
  },
};

export const ResponsiveGridColumns: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: [
      <GridColumn key="1" span={12} md={{ span: 6 }} lg={{ span: 4 }}>
        {gridItem("Full → Half → Third")}
      </GridColumn>,
      <GridColumn key="2" span={12} md={{ span: 6 }} lg={{ span: 4 }}>
        {gridItem("Full → Half → Third")}
      </GridColumn>,
      <GridColumn key="3" span={12} md={{ span: 12 }} lg={{ span: 4 }}>
        {gridItem("Full → Full → Third")}
      </GridColumn>,
    ],
  },
};

export const DashboardLayout: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: [
      <GridColumn key="header" span={12}>
        <div className="rounded border border-purple-300 bg-purple-100 p-6 text-center font-semibold">
          Header - Full Width
        </div>
      </GridColumn>,
      <GridColumn key="sidebar" span={12} lg={{ span: 3 }}>
        <div className="rounded border border-green-300 bg-green-100 p-4 text-center">
          Sidebar
          <br />
          Full on mobile
          <br />
          25% on desktop
        </div>
      </GridColumn>,
      <GridColumn key="main" span={12} lg={{ span: 9 }}>
        <div className="rounded border border-blue-300 bg-blue-100 p-4 text-center">
          Main Content
          <br />
          Full on mobile
          <br />
          75% on desktop
        </div>
      </GridColumn>,
      <GridColumn key="footer" span={12}>
        <div className="rounded border border-purple-300 bg-purple-100 p-6 text-center font-semibold">
          Footer - Full Width
        </div>
      </GridColumn>,
    ],
  },
};

export const ColumnStartEnd: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: [
      <GridColumn key="1" start={1} end={4}>
        {gridItem("Start 1, End 4")}
      </GridColumn>,
      <GridColumn key="2" start={5} end={9}>
        {gridItem("Start 5, End 9")}
      </GridColumn>,
      <GridColumn key="3" start={10} end={13}>
        {gridItem("Start 10, End 13")}
      </GridColumn>,
      <GridColumn key="4" start={2} end={6}>
        {gridItem("Start 2, End 6 (overlaps visually)")}
      </GridColumn>,
    ],
  },
};

export const ColumnOrder: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: [
      <GridColumn key="1" order={3}>
        {gridItem("First in code, Third in display (order: 3)")}
      </GridColumn>,
      <GridColumn key="2" order={1}>
        {gridItem("Second in code, First in display (order: 1)")}
      </GridColumn>,
      <GridColumn key="3" order={2}>
        {gridItem("Third in code, Second in display (order: 2)")}
      </GridColumn>,
    ],
  },
};

export const LargeGap: Story = {
  args: {
    cols: 3,
    gap: 8,
    children: [
      gridItem("Column 1"),
      gridItem("Column 2"),
      gridItem("Column 3"),
    ],
  },
};

export const NoGap: Story = {
  args: {
    cols: 4,
    gap: 0,
    children: [
      gridItem("Column 1"),
      gridItem("Column 2"),
      gridItem("Column 3"),
      gridItem("Column 4"),
    ],
  },
};
