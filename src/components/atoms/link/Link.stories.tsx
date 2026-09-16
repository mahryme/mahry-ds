import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent } from "storybook/test";
import { Link } from "./Link";

const meta = {
    title: "Atoms/Link",
    component: Link,
    argTypes: {
        label: { control: "text" },
        asChild: { control: false },
        children: { control: false },
    },
    args: { label: "Link", href: "https://example.com" },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focused: Story = {
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("link")).toHaveFocus();
    },
};

export const AsChild: Story = {
    args: { asChild: true },
    render: (args) => (
        <Link {...args}>
            <a href="https://example.com">Visit</a>
        </Link>
    ),
    play: async ({ canvas }) => {
        const link = canvas.getByRole("link", { name: "Visit" });
        await expect(link).toHaveAttribute("href", "https://example.com");
    },
};

export const ClickInteraction: Story = {
    args: { onClick: fn() },
    play: async ({ args, canvas }) => {
        const link = canvas.getByRole("link", { name: "Link" });
        await userEvent.click(link);
        await expect(args.onClick).toHaveBeenCalledOnce();
    },
};
