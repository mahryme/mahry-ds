import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
    it("renders its children", () => {
        render(<Container>Content</Container>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies the default type's responsive padding without an unprefixed py-8", () => {
        render(<Container>Default content</Container>);
        const el = screen.getByText("Default content");
        expect(el).toHaveClass("px-5", "py-5", "md:px-10", "md:py-8");
        expect(el).not.toHaveClass("py-8");
    });

    it("applies the nav type's compact padding", () => {
        render(<Container type="nav">Nav content</Container>);
        const el = screen.getByText("Nav content");
        expect(el).toHaveClass("px-5", "py-2", "md:px-10", "md:py-2");
    });
});
