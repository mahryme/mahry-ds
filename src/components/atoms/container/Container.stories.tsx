import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
    title: "Atoms/Container",
    component: Container,
    argTypes: {
        type: { control: "radio", options: ["default", "blog", "nav"] },
        children: { control: "text" },
    },
    args: {
        type: "default",
        children: "Container content",
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { type: "default" } };
export const Blog: Story = { args: { type: "blog" } };
export const Nav: Story = { args: { type: "nav" } };
