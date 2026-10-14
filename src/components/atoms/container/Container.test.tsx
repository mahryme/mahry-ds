import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
    it("renders its children", () => {
        render(<Container>Content</Container>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies the default variant's responsive padding without an unprefixed py-8", () => {
        render(<Container>Default content</Container>);
        const el = screen.getByText("Default content");
        expect(el).toHaveClass("px-5", "py-5", "md:px-8", "md:py-8");
        expect(el).not.toHaveClass("py-8");
    });

    it("applies the no-pt variant's gutter and bottom padding with no top padding", () => {
        render(<Container variant="no-pt">No-pt content</Container>);
        const el = screen.getByText("No-pt content");
        expect(el).toHaveClass("px-5", "pt-0", "pb-5", "md:px-8", "md:pt-0", "md:pb-8");
        expect(el).not.toHaveClass("py-0");
    });

    it("caps width at the 1440 box and centers content for every variant", () => {
        render(<Container variant="no-pt">Capped content</Container>);
        const el = screen.getByText("Capped content");
        expect(el).toHaveClass("mx-auto", "w-full", "max-w-[1440px]");
    });
});
