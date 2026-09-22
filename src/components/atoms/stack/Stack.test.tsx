import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
    it("renders children inside a div with default direction and gap", () => {
        const { container } = render(
            <Stack>
                <span>Item</span>
            </Stack>,
        );
        const stack = container.firstElementChild;
        expect(stack?.tagName).toBe("DIV");
        expect(stack).toHaveClass("flex-col", "gap-default");
        expect(stack?.textContent).toBe("Item");
    });

    it("applies the horizontal direction class", () => {
        const { container } = render(<Stack direction="horizontal" />);
        expect(container.firstElementChild).toHaveClass("flex-row");
    });

    it("applies each gap variant class", () => {
        const { container: micro } = render(<Stack gap="micro" />);
        expect(micro.firstElementChild).toHaveClass("gap-micro");

        const { container: tight } = render(<Stack gap="tight" />);
        expect(tight.firstElementChild).toHaveClass("gap-tight");

        const { container: column } = render(<Stack gap="column" />);
        expect(column.firstElementChild).toHaveClass("gap-column-gap", "md:gap-column-gap-desktop");
    });

    it("merges a custom className", () => {
        const { container } = render(<Stack className="my-4" />);
        expect(container.firstElementChild).toHaveClass("my-4", "flex-col", "gap-default");
    });
});
