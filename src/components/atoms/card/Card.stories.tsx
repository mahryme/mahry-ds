import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
    title: "Atoms/Card",
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Card {...args} className="h-[312px] w-[440px]" />,
};
