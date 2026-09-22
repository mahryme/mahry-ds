import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent } from "storybook/test";
import { NavLink } from "./NavLink";

const meta = {
    title: "Atoms/NavLink",
    component: NavLink,
    argTypes: {
        label: { control: "text" },
        isCurrent: { control: "boolean" },
        asChild: { control: false },
        children: { control: false },
    },
    args: { label: "Label", href: "#section" },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Current: Story = {
    args: { isCurrent: true },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("link")).toHaveAttribute(
            "aria-current",
            "location",
        );
    },
};

export const Focused: Story = {
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("link")).toHaveFocus();
    },
};

export const AsChild: Story = {
    args: { asChild: true },
    render: (args) => (
        <NavLink {...args}>
            <a href="#section">Visit</a>
        </NavLink>
    ),
    play: async ({ canvas }) => {
        const link = canvas.getByRole("link", { name: "Visit" });
        await expect(link).toHaveAttribute("href", "#section");
    },
};
