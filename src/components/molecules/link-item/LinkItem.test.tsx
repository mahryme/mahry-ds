import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { LinkItem } from "./LinkItem";

describe("LinkItem", () => {
    afterEach(cleanup);

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

    it("renders coming-soon as plain text with a badge and no link", () => {
        render(
            <LinkItem
                status="coming-soon"
                label="Playground"
                description="Not published yet"
                href="https://example.com"
            />,
        );
        expect(screen.queryByRole("link")).not.toBeInTheDocument();
        expect(screen.getByText("Playground")).toBeInTheDocument();
        expect(screen.getByText("Coming soon")).toBeInTheDocument();
        expect(screen.getByText("Not published yet")).toHaveClass(
            "text-fg-tertiary",
        );
    });
});
