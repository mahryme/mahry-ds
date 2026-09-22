import { describe, it, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
    it("renders as an anchor with its label and href", () => {
        const { container } = render(
            <NavLink label="Overview" href="#overview" />,
        );
        const link = within(container).getByRole("link", {
            name: "Overview",
        });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "#overview");
    });

    it("has no aria-current by default", () => {
        const { container } = render(
            <NavLink label="Overview" href="#overview" />,
        );
        expect(within(container).getByRole("link")).not.toHaveAttribute(
            "aria-current",
        );
    });

    it("marks the current destination with aria-current", () => {
        const { container } = render(
            <NavLink label="Overview" href="#overview" isCurrent />,
        );
        expect(within(container).getByRole("link")).toHaveAttribute(
            "aria-current",
            "location",
        );
    });
});
