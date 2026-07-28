import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent } from "storybook/test";
import { IconButton } from "./IconButton";
import { Plus } from "lucide-react";

const meta = {
    title: "Atoms/IconButton",
    component: IconButton,
    argTypes: {
        variant: {
            control: "radio",
            options: ["primary", "secondary", "tertiary"],
        },
        label: { control: "text" },
        isDisabled: { control: "boolean" },
        asChild: { control: false },
        icon: { control: false },
        children: { control: false },
    },
    args: {
        label: "Add",
        variant: "primary",
        icon: <Plus size={20} strokeWidth={1.5} />,
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary" } };

export const Focused: Story = {
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("button")).toHaveFocus();
    },
};

export const AsLink: Story = {
    args: { asChild: true },
    render: (args) => (
        <IconButton {...args}>
            <a href="https://example.com">
                <Plus size={20} strokeWidth={1.5} />
            </a>
        </IconButton>
    ),
    play: async ({ canvas, args }) => {
        const link = canvas.getByRole("link", { name: args.label });
        await expect(link).toHaveAttribute("href", "https://example.com");
    },
};

export const ClickInteraction: Story = {
    args: { onClick: fn() },
    play: async ({ args, canvas }) => {
        const button = canvas.getByRole("button", { name: "Add" });
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalledOnce();
    },
};

export const DisabledInteraction: Story = {
    args: { isDisabled: true, onClick: fn() },
    play: async ({ args, canvas }) => {
        const button = canvas.getByRole("button", { name: "Add" });
        await expect(button).toBeDisabled();
        await userEvent.click(button, { pointerEventsCheck: 0 });
        await expect(args.onClick).not.toHaveBeenCalled();
    },
};
