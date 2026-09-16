import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
    it("renders as an anchor with its label and href", () => {
        render(<Link label="Visit" href="https://example.com" />);
        const link = screen.getByRole("link", { name: "Visit" });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
    });
});
