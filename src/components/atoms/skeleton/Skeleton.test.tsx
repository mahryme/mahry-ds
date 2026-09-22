import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
    it("renders", () => {
        const { container } = render(<Skeleton />);
        expect(container.querySelector('[data-slot="skeleton"]')).toBeInTheDocument();
    });
});
