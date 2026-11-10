import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { User } from "lucide-react";
import { Tabs, TabsList } from "../../molecules/tabs/Tabs";
import { Tab } from "./Tab";

function renderTab(props: React.ComponentProps<typeof Tab>) {
    const result = render(
        <Tabs defaultValue="a">
            <TabsList>
                <Tab {...props} />
            </TabsList>
        </Tabs>,
    );
    return { ...result, screen: within(result.container) };
}

describe("Tab", () => {
    it("renders a tab with the default label", () => {
        const { screen } = renderTab({ value: "a" });
        expect(screen.getByRole("tab", { name: "Tab" })).toBeInTheDocument();
    });

    it("marks the tab matching the root value as selected", () => {
        const { screen } = renderTab({ value: "a" });
        expect(screen.getByRole("tab")).toHaveAttribute("data-state", "active");
    });

    it("renders the left icon when provided", () => {
        const { container } = renderTab({
            value: "a",
            iconLeft: <User data-testid="icon" />,
        });
        expect(container.querySelector("[data-testid=icon]")).not.toBeNull();
    });

    it("is disabled when disabled is set", () => {
        const { screen } = renderTab({ value: "b", disabled: true });
        expect(screen.getByRole("tab")).toBeDisabled();
    });
});
