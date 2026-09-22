import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const stackVariants = cva("flex", {
    variants: {
        direction: { vertical: "flex-col", horizontal: "flex-row" },
        gap: {
            micro: "gap-micro",
            tight: "gap-tight",
            default: "gap-default",
            column: "gap-column-gap md:gap-column-gap-desktop",
        },
    },
    defaultVariants: { direction: "vertical", gap: "default" },
});

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof stackVariants>;

export function Stack({ className, direction, gap, children, ...props }: StackProps) {
    return (
        <div className={cn(stackVariants({ direction, gap, className }))} {...props}>
            {children}
        </div>
    );
}
