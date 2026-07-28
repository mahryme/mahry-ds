import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent } from "storybook/test";
import { Button } from "./Button";
import { Plus, ArrowRight } from "lucide-react";

const meta = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        variant: {
            control: "radio",
            options: ["primary", "secondary", "tertiary", "ghost"],
        },
        label: { control: "text" },
        isDisabled: { control: "boolean" },
        hasIconLeft: { control: "boolean" },
        hasIconRight: { control: "boolean" },
        asChild: { control: false },
        iconLeft: { control: false },
        iconRight: { control: false },
        children: { control: false },
    },
    args: { label: "Button", variant: "primary" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary" } };
export const Ghost: Story = { args: { variant: "ghost" } };

export const WithIcons: Story = {
    args: {
        variant: "primary",
        hasIconLeft: true,
        iconLeft: <Plus size={16} strokeWidth={1.5} />,
        hasIconRight: true,
        iconRight: <ArrowRight size={16} strokeWidth={1.5} />,
    },
};

export const Focused: Story = {
    args: { variant: "primary" },
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("button")).toHaveFocus();
    },
};

export const AsLink: Story = {
    args: { variant: "primary", asChild: true },
    render: (args) => (
        <Button {...args}>
            <a href="https://example.com">Visit</a>
        </Button>
    ),
    play: async ({ canvas }) => {
        const link = canvas.getByRole("link", { name: "Visit" });
        await expect(link).toHaveAttribute("href", "https://example.com");
    },
};

export const ClickInteraction: Story = {
    args: { variant: "primary", onClick: fn() },
    play: async ({ args, canvas }) => {
        const button = canvas.getByRole("button", { name: "Button" });
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalledOnce();
    },
};

export const DisabledInteraction: Story = {
    args: { variant: "primary", isDisabled: true, onClick: fn() },
    play: async ({ args, canvas }) => {
        const button = canvas.getByRole("button", { name: "Button" });
        await expect(button).toBeDisabled();
        await userEvent.click(button, { pointerEventsCheck: 0 });
        await expect(args.onClick).not.toHaveBeenCalled();
    },
};
