import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BarChart,
  chartNeutral,
  chartPalette,
  type BarChartDatum,
  type BarChartGroupDatum,
  type BarChartSeries,
} from './BarChart';

const revenueByQuarter: BarChartDatum[] = [
  { label: 'Q1', value: 42000 },
  { label: 'Q2', value: 58000 },
  { label: 'Q3', value: 51000 },
  { label: 'Q4', value: 73000 },
];

const trafficBySource: BarChartDatum[] = [
  { label: 'Organic', value: 4820 },
  { label: 'Direct', value: 3110 },
  { label: 'Referral', value: 1980 },
  { label: 'Social', value: 1340 },
  { label: 'Email', value: 890 },
];

const engagementByChannel: BarChartDatum[] = [
  { label: 'Search', value: 68 },
  { label: 'Display', value: 24 },
  { label: 'Video', value: 41 },
  { label: 'Native', value: 33 },
  { label: 'Audio', value: 12 },
  { label: 'Print', value: 8 },
];

const monthlyActiveUsers: BarChartDatum[] = [
  { label: 'Jan', value: 1200 },
  { label: 'Feb', value: 1450 },
  { label: 'Mar', value: 1380 },
  { label: 'Apr', value: 1620 },
  { label: 'May', value: 1810 },
  { label: 'Jun', value: 1750 },
  { label: 'Jul', value: 1990 },
  { label: 'Aug', value: 2140 },
  { label: 'Sep', value: 2050 },
  { label: 'Oct', value: 2380 },
  { label: 'Nov', value: 2510 },
  { label: 'Dec', value: 2740 },
];

// Multi-series data (stacked) — two generic series across categories.
const twoSeries: BarChartSeries[] = [
  { id: 'series1', label: 'Series 1', color: 'var(--rc-chart-1)' },
  { id: 'series2', label: 'Series 2', color: chartNeutral },
];

const stackedByCategory: BarChartGroupDatum[] = [
  { label: 'Category A', values: { series1: 4, series2: 5 } },
  { label: 'Category B', values: { series1: 3, series2: 5 } },
  { label: 'Category C', values: { series1: 5, series2: 2 } },
  { label: 'Category D', values: { series1: 3, series2: 3 } },
  { label: 'Category E', values: { series1: 0, series2: 1 } },
];

// Multi-series data for the vertical / grouped demos.
const twoSeriesAlt: BarChartSeries[] = [
  { id: 'series1', label: 'Series 1', color: 'var(--rc-chart-1)' },
  { id: 'series2', label: 'Series 2', color: 'var(--rc-chart-2)' },
];

const groupedByCategory: BarChartGroupDatum[] = [
  { label: 'Group 1', values: { series1: 28, series2: 14 } },
  { label: 'Group 2', values: { series1: 36, series2: 22 } },
  { label: 'Group 3', values: { series1: 33, series2: 18 } },
  { label: 'Group 4', values: { series1: 47, series2: 26 } },
];

// Percent (100%-stacked) — three generic series normalized per category.
const threeSeries: BarChartSeries[] = [
  { id: 'series1', label: 'Series 1', color: 'var(--rc-chart-1)' },
  { id: 'series2', label: 'Series 2', color: 'var(--rc-chart-3)' },
  { id: 'series3', label: 'Series 3', color: 'var(--rc-chart-red)' },
];

const percentByCategory: BarChartGroupDatum[] = [
  { label: 'Category A', values: { series1: 72, series2: 23, series3: 5 } },
  { label: 'Category B', values: { series1: 32, series2: 43, series3: 25 } },
  { label: 'Category C', values: { series1: 10, series2: 38, series3: 52 } },
];

const usd = (n: number) => `$${(n / 1000).toFixed(0)}k`;

const meta = {
  title: 'Components/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['vertical', 'horizontal'] },
    stacked: { control: 'boolean' },
    height: { control: { type: 'range', min: 200, max: 560, step: 20 } },
    showGrid: { control: 'boolean' },
    showValues: { control: 'boolean' },
    showAxis: { control: 'boolean' },
    showTotals: { control: 'boolean' },
    showTrack: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    percent: { control: 'boolean' },
    color: { control: 'color' },
    maxBarWidth: { control: { type: 'range', min: 8, max: 96, step: 4 } },
    data: { control: false },
    series: { control: false },
    formatValue: { control: false },
    formatTotal: { control: false },
  },
  args: {
    data: trafficBySource,
    orientation: 'vertical',
    height: 320,
    showGrid: true,
    showValues: false,
    showAxis: true,
    showTotals: false,
    showTrack: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 640, maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    data: trafficBySource,
    ariaLabel: 'Sessions by traffic source',
  },
};

export const Horizontal: Story = {
  args: {
    data: trafficBySource,
    orientation: 'horizontal',
    ariaLabel: 'Sessions by traffic source',
  },
};

export const WithValueLabels: Story = {
  name: 'With value labels',
  args: {
    data: revenueByQuarter,
    showValues: true,
    formatValue: usd,
    ariaLabel: 'Revenue by quarter',
  },
};

export const NoGrid: Story = {
  name: 'No grid',
  args: {
    data: revenueByQuarter,
    showGrid: false,
    formatValue: usd,
    ariaLabel: 'Revenue by quarter',
  },
};

export const CategoricalPalette: Story = {
  name: 'Custom colors / categorical palette',
  args: {
    data: engagementByChannel.map((d, i) => ({
      ...d,
      color: chartPalette[i % chartPalette.length],
    })),
    showValues: true,
    ariaLabel: 'Engagement score by channel',
  },
};

export const ManyCategories: Story = {
  name: 'Many categories',
  args: {
    data: monthlyActiveUsers,
    height: 360,
    formatValue: (n) => `${(n / 1000).toFixed(1)}k`,
    ariaLabel: 'Monthly active users',
  },
};

export const StackedHorizontal: Story = {
  name: 'Stacked horizontal',
  args: {
    data: stackedByCategory,
    series: twoSeries,
    orientation: 'horizontal',
    stacked: true,
    showTrack: true,
    showValues: true,
    showTotals: true,
    showLegend: true,
    showAxis: false,
    showGrid: false,
    height: 300,
    ariaLabel: 'Stacked values by category',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 760, maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const StackedVertical: Story = {
  name: 'Stacked vertical',
  args: {
    data: groupedByCategory,
    series: twoSeriesAlt,
    orientation: 'vertical',
    stacked: true,
    showTrack: true,
    showValues: true,
    showTotals: true,
    showLegend: true,
    showAxis: false,
    showGrid: false,
    height: 360,
    ariaLabel: 'Stacked values by group',
  },
};

export const PercentStacked: Story = {
  name: 'Percent stacked (100%)',
  args: {
    data: percentByCategory,
    series: threeSeries,
    orientation: 'horizontal',
    percent: true,
    showValues: true,
    showLegend: true,
    showTotals: false,
    showTrack: false,
    showAxis: false,
    showGrid: false,
    height: 300,
    header: (
      <>
        Reference: <strong>100% Series 1</strong> across all categories
      </>
    ),
    footnote: 'Illustrative sample data',
    ariaLabel: 'Composition by category',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 760,
          maxWidth: '100%',
          padding: 16,
          border: '1px solid var(--rc-border-subtle-02)',
          borderRadius: 12,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Grouped: Story = {
  name: 'Grouped (side-by-side)',
  args: {
    data: groupedByCategory,
    series: twoSeriesAlt,
    orientation: 'vertical',
    stacked: false,
    showValues: true,
    showAxis: true,
    showGrid: true,
    showLegend: true,
    ariaLabel: 'Grouped values by group',
  },
};
