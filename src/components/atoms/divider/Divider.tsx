import * as React from "react";
import { cn } from "../../../lib/utils";

export type DividerProps = React.HTMLAttributes<HTMLHRElement>;

export function Divider({ className, ...props }: DividerProps) {
    return (
        <hr className={cn("h-px w-full border-0 bg-border-secondary", className)} {...props} />
    );
}
