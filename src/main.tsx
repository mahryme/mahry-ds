import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Container } from "./components/atoms/container/Container";

function Label({ children }: { children: React.ReactNode }) {
    return (
        <p
            style={{
                fontFamily: "monospace",
                fontSize: 11,
                opacity: 0.6,
                margin: "0 0 8px",
            }}
        >
            {children}
        </p>
    );
}

const boundary = {
    outline: "1px dashed currentColor",
    background: "rgba(99, 102, 241, 0.06)",
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div style={{ display: "grid", gap: 40, padding: "24px 0" }}>
            <section>
                <Label>
                    Container type=&quot;nav&quot; — max-w-7xl, px-5 py-2,
                    md:px-10 md:py-5 (resize viewport to see the responsive
                    padding jump)
                </Label>
                <Container type="nav" style={boundary}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <strong>Logo</strong>
                        <div style={{ display: "flex", gap: 16 }}>
                            <span>Home</span>
                            <span>Docs</span>
                            <span>About</span>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Label>
                    Container type=&quot;default&quot; — max-w-7xl, no padding
                </Label>
                <Container style={boundary}>
                    <p>Default container content, full max-w-7xl width.</p>
                </Container>
            </section>

            <section>
                <Label>
                    Container type=&quot;blog&quot; — max-w-3xl, gap-8 (note:
                    gap only applies if the container itself is flex/grid —
                    this div is block, so gap-8 currently has no visible
                    effect on these children)
                </Label>
                <Container type="blog" style={boundary}>
                    <p>First paragraph of blog content.</p>
                    <p>Second paragraph, to check spacing between children.</p>
                </Container>
            </section>
        </div>
    </StrictMode>,
);
