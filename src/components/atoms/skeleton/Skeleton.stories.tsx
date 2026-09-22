import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
    title: "Atoms/Skeleton",
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Skeleton {...args} className="h-10 w-full" />,
};

export const TextLine: Story = {
    render: () => <Skeleton className="h-4 w-48" />,
};

export const Avatar: Story = {
    render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

export const CardPlaceholder: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
            </div>
        </div>
    ),
};
