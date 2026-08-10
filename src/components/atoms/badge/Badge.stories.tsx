import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
    title: "Atoms/Badge",
    component: Badge,
    parameters: {
        docs: {
            description: {
                component:
                    "Small non-interactive label used to flag status, category, or count next to other content.",
            },
        },
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["default", "accent"],
            description:
                "Visual treatment — default is neutral, accent is brand-tinted for content that should draw attention.",
        },
        children: { control: "text" },
    },
    args: {
        children: "Badge",
        variant: "default",
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { variant: "default" },
    parameters: {
        docs: {
            description: {
                story: "Neutral tag for general labels or categories — the standard treatment when nothing needs to stand out.",
            },
        },
    },
};

export const Accent: Story = {
    args: { variant: "accent", children: "New" },
    parameters: {
        docs: {
            description: {
                story: 'Brand-tinted tag for a status or category that should draw attention, e.g. "New" or a highlighted count.',
            },
        },
    },
};
