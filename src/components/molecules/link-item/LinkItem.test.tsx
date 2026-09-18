import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LinkItem } from "./LinkItem";

describe("LinkItem", () => {
    it("renders its label as a link and its description as text", () => {
        render(
            <LinkItem
                label="Case study"
                description="A short summary"
                href="https://example.com"
            />,
        );
        const link = screen.getByRole("link", { name: "Case study" });
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(screen.getByText("A short summary")).toBeInTheDocument();
    });
});
