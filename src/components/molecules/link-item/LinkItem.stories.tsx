import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent } from "storybook/test";
import { LinkItem } from "./LinkItem";

const meta = {
    title: "Molecules/LinkItem",
    component: LinkItem,
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        asChild: { control: false },
        children: { control: false },
    },
    args: {
        label: "Link",
        description: "Description",
        href: "https://example.com",
    },
} satisfies Meta<typeof LinkItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongDescription: Story = {
    args: {
        label: "Case study",
        description:
            "A long-form summary that runs past three lines so the description text clamps with an ellipsis instead of pushing the layout taller than the list allows for. This sentence exists purely to force that wrap.",
    },
};

export const Focused: Story = {
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("link")).toHaveFocus();
    },
};
