import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-lg border px-2 py-1 font-label text-label-sm whitespace-nowrap",
    {
        variants: {
            variant: {
                default:
                    "bg-container-low border-border-secondary text-fg-primary",
                accent: "bg-container-brand border-border-brand text-fg-on-brand",
            },
        },
        defaultVariants: { variant: "default" },
    },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, children, ...props }: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ variant, className }))} {...props}>
            {children}
        </span>
    );
}
