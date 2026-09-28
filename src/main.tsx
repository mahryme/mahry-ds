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
                    Container variant=&quot;no-py&quot; — max-w-[1360px], horizontal
                    gutter only (resize viewport to see the responsive
                    gutter jump)
                </Label>
                <Container variant="no-py" style={boundary}>
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
                    Container variant=&quot;default&quot; — max-w-[1360px],
                    horizontal gutter + vertical padding
                </Label>
                <Container style={boundary}>
                    <p>Default container content, capped at max-w-[1360px].</p>
                </Container>
            </section>
        </div>
    </StrictMode>,
);
