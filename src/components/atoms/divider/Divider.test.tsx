import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
    it("renders as a native hr element", () => {
        const { container } = render(<Divider />);
        expect(container.querySelector("hr")).toBeInTheDocument();
    });

    it("merges a custom className", () => {
        const { container } = render(<Divider className="my-4" />);
        expect(container.querySelector("hr")).toHaveClass("my-4", "bg-border-secondary");
    });
});
