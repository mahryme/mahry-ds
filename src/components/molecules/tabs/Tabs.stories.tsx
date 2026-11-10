import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent } from "storybook/test";
import { User } from "lucide-react";
import { Tab } from "../../atoms/tab/Tab";
import { Tabs, TabsList, TabsPanel } from "./Tabs";

const meta = {
    title: "Molecules/Tabs",
    component: Tabs,
    args: { defaultValue: "account" },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story["render"] = (args) => (
    <Tabs {...args}>
        <TabsList>
            <Tab value="account" label="Account" />
            <Tab value="password" label="Password" />
        </TabsList>
        <TabsPanel value="account">Account settings</TabsPanel>
        <TabsPanel value="password">Password settings</TabsPanel>
    </Tabs>
);

export const Default: Story = { render };

export const WithIcons: Story = {
    render: (args) => (
        <Tabs {...args}>
            <TabsList>
                <Tab value="account" label="Account" iconLeft={<User />} />
                <Tab value="password" label="Password" iconLeft={<User />} />
            </TabsList>
        </Tabs>
    ),
};

export const WithDisabledTab: Story = {
    render: (args) => (
        <Tabs {...args}>
            <TabsList>
                <Tab value="account" label="Account" />
                <Tab value="password" label="Password" disabled />
            </TabsList>
        </Tabs>
    ),
};

export const KeyboardNavigation: Story = {
    render,
    play: async ({ canvas }) => {
        await userEvent.tab();
        await expect(canvas.getByRole("tab", { name: "Account" })).toHaveFocus();
        await userEvent.keyboard("{ArrowRight}");
        await expect(canvas.getByRole("tab", { name: "Password" })).toHaveFocus();
    },
};
