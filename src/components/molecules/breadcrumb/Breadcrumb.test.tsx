import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./Breadcrumb";

function renderTrail() {
    return render(
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" label="Home" />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Current</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>,
    );
}

describe("Breadcrumb", () => {
    it("renders a labelled breadcrumb navigation landmark", () => {
        const { container } = renderTrail();
        expect(
            within(container).getByRole("navigation", { name: "breadcrumb" }),
        ).toBeInTheDocument();
    });

    it("renders prior steps as NavLink anchors with their href", () => {
        const { container } = renderTrail();
        const link = within(container).getByRole("link", { name: "Home" });
        expect(link.tagName).toBe("A");
        expect(link).toHaveAttribute("href", "/");
        expect(link).not.toHaveAttribute("aria-current");
    });

    it("renders the current page as non-interactive text with aria-current=page", () => {
        const { container } = renderTrail();
        const page = within(container).getByText("Current");
        expect(page.tagName).toBe("SPAN");
        expect(page).toHaveAttribute("aria-current", "page");
        expect(page).toHaveAttribute("aria-disabled", "true");
        expect(page).not.toHaveAttribute("href");
    });

    it("hides the separator from assistive tech and allows overriding its content", () => {
        const { container } = render(
            <BreadcrumbSeparator>/</BreadcrumbSeparator>,
        );
        const sep = container.firstElementChild;
        expect(sep).toHaveAttribute("aria-hidden", "true");
        expect(sep?.textContent).toBe("/");
    });
});
