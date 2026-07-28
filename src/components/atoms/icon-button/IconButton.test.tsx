import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
    it("renders with its accessible label", () => {
        render(<IconButton label="Close" icon={<span>×</span>} />);
        expect(
            screen.getByRole("button", { name: "Close" }),
        ).toBeInTheDocument();
    });
});
