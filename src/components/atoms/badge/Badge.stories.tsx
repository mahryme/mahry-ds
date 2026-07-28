import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
    title: "Atoms/Badge",
    component: Badge,
    argTypes: {
        variant: { control: "radio", options: ["default", "accent"] },
        children: { control: "text" },
    },
    args: {
        children: "Badge",
        variant: "default",
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { variant: "default" } };
export const Accent: Story = { args: { variant: "accent", children: "New" } };
