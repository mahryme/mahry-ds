import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { User } from "lucide-react";
import { Tabs, TabsList } from "../../molecules/tabs/Tabs";
import { Tab } from "./Tab";

const meta = {
    title: "Atoms/Tab",
    component: Tab,
    args: { value: "one", label: "Tab" },
    argTypes: {
        variant: { control: "select", options: ["pill"] },
        disabled: { control: "boolean" },
    },
    decorators: [
        (Story) => (
            <Tabs defaultValue="one">
                <TabsList>
                    <Story />
                </TabsList>
            </Tabs>
        ),
    ],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("tab", { name: "Tab" })).toHaveAttribute(
            "aria-selected",
            "true",
        );
    },
};

export const Inactive: Story = { args: { value: "two" } };

export const WithIcon: Story = { args: { iconLeft: <User /> } };

export const Disabled: Story = {
    args: { value: "two", disabled: true },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole("tab", { name: "Tab" })).toBeDisabled();
    },
};
