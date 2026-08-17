import * as React from "react";
import { cn } from "../../../lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-container-high border border-border-secondary shadow-xs rounded-2xl",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
