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
        expect(el).toHaveClass("px-5", "py-5", "md:px-10", "md:py-8");
        expect(el).not.toHaveClass("py-8");
    });

    it("applies the no-py variant's horizontal-only gutter", () => {
        render(<Container variant="no-py">No-py content</Container>);
        const el = screen.getByText("No-py content");
        expect(el).toHaveClass("px-5", "py-0", "md:px-10", "md:py-0");
    });

    it("caps width and centers content for every variant", () => {
        render(<Container variant="no-py">Capped content</Container>);
        const el = screen.getByText("Capped content");
        expect(el).toHaveClass("mx-auto", "w-full", "max-w-[1360px]");
    });
});
