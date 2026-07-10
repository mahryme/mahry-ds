import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div style={{ padding: 24 }}>
            <div
                className="bg-surface-default text-display-xl"
                style={{ padding: 24 }}
            >
                surface/default
            </div>
            <div className="bg-surface-subtle" style={{ padding: 24 }}>
                surface/subtle
            </div>
        </div>
    </StrictMode>,
);
