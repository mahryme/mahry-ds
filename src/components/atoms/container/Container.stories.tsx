import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
    title: "Atoms/Container",
    component: Container,
    argTypes: {
        variant: { control: "radio", options: ["default", "no-pt"] },
        children: { control: "text" },
    },
    args: {
        variant: "default",
        children: "Container content",
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { variant: "default" } };
export const NoPt: Story = { args: { variant: "no-pt" } };
