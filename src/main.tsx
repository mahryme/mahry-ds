import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./foundations/typography/fonts.css";
import { Button } from "./components/atoms/button/Button";
import { Badge } from "./components/atoms/badge/Badge";

function Label({ children }: { children: React.ReactNode }) {
    return (
        <p
            style={{
                fontFamily: "monospace",
                fontSize: 11,
                opacity: 0.6,
                margin: "0 0 4px",
            }}
        >
            {children}
        </p>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div style={{ padding: 24, display: "grid", gap: 32, maxWidth: 640 }}>
            <section>
                <Label>
                    LAYOUT — font-heading + text-display-xl (both classes)
                </Label>
                <p className="font-heading text-display-xl">Display XL</p>
            </section>

            <section>
                <Label>
                    LAYOUT — font-heading + text-heading-lg (both classes)
                </Label>
                <p className="font-heading text-heading-lg">Heading LG</p>
            </section>

            <section>
                <Label>
                    LAYOUT — text-heading-lg ONLY, no font-heading (tests
                    whether font-family silently falls back)
                </Label>
                <p className="text-heading-lg">Heading LG, no font class</p>
            </section>

            <section>
                <Label>LAYOUT — font-body + text-body-md (both classes)</Label>
                <p className="font-body text-body-md">Body MD paragraph</p>
            </section>

            <hr style={{ opacity: 0.2 }} />

            <section>
                <Label>
                    COMPONENT — Button (internally uses font-label text-label-lg
                    via cva)
                </Label>
                <Button label="Primary button" variant="primary" />
            </section>

            <section>
                <Label>
                    COMPONENT — Badge (internally uses font-label text-label-sm
                    via cva)
                </Label>
                <Badge>Badge label</Badge>
            </section>
        </div>
    </StrictMode>,
);
