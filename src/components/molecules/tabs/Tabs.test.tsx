import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tab } from "../../atoms/tab/Tab";
import { Tabs, TabsList, TabsPanel } from "./Tabs";

function renderTabs() {
    const { container } = render(
        <Tabs defaultValue="a">
            <TabsList>
                <Tab value="a" label="One" />
                <Tab value="b" label="Two" />
            </TabsList>
            <TabsPanel value="a">Panel A</TabsPanel>
            <TabsPanel value="b">Panel B</TabsPanel>
        </Tabs>,
    );
    return within(container);
}

describe("Tabs", () => {
    it("renders a tablist with the default tab selected and its panel shown", () => {
        const screen = renderTabs();
        expect(screen.getByRole("tablist")).toBeInTheDocument();
        expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
            "aria-selected",
            "true",
        );
        expect(screen.getByText("Panel A")).toBeVisible();
        expect(screen.queryByText("Panel B")).toBeNull();
    });

    it("switches the active tab and panel on click", async () => {
        const screen = renderTabs();
        await userEvent.click(screen.getByRole("tab", { name: "Two" }));
        expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
            "aria-selected",
            "true",
        );
        expect(screen.getByText("Panel B")).toBeVisible();
    });
});
