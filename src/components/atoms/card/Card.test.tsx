import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
    it("renders its children", () => {
        render(<Card>Content</Card>);
        expect(screen.getByText("Content")).toBeInTheDocument();
    });
});
