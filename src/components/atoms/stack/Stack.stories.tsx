import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
    title: "Atoms/Stack",
    component: Stack,
    argTypes: {
        direction: { control: "radio", options: ["vertical", "horizontal"] },
        gap: { control: "radio", options: ["micro", "tight", "default", "column"] },
    },
    args: {
        direction: "vertical",
        gap: "default",
    },
    render: (args) => (
        <Stack {...args}>
            <div className="bg-container-high px-4 py-2">Item one</div>
            <div className="bg-container-high px-4 py-2">Item two</div>
            <div className="bg-container-high px-4 py-2">Item three</div>
        </Stack>
    ),
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalMicro: Story = { args: { direction: "vertical", gap: "micro" } };
export const VerticalTight: Story = { args: { direction: "vertical", gap: "tight" } };
export const VerticalDefault: Story = { args: { direction: "vertical", gap: "default" } };
export const VerticalColumn: Story = { args: { direction: "vertical", gap: "column" } };
export const HorizontalMicro: Story = { args: { direction: "horizontal", gap: "micro" } };
export const HorizontalTight: Story = { args: { direction: "horizontal", gap: "tight" } };
export const HorizontalDefault: Story = { args: { direction: "horizontal", gap: "default" } };
export const HorizontalColumn: Story = { args: { direction: "horizontal", gap: "column" } };
