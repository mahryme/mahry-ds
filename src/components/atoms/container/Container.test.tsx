import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
    it("renders its children", () => {
        render(<Container>Content</Container>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies the nav type's responsive padding classes without an unprefixed py-5", () => {
        render(<Container type="nav">Nav content</Container>);
        const el = screen.getByText("Nav content");
        expect(el).toHaveClass("px-5", "md:px-10", "md:py-5");
        expect(el).not.toHaveClass("py-5");
    });
});
