import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const containerVariants = cva("mx-auto w-full max-w-[1440px]", {
    variants: {
        variant: {
            default: "px-5 py-5 md:px-8 md:py-8",
            "no-pt": "px-5 pt-0 pb-5 md:px-8 md:pt-0 md:pb-8",
        },
    },
    defaultVariants: { variant: "default" },
});

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof containerVariants>;

export function Container({
    className,
    variant,
    children,
    ...props
}: ContainerProps) {
    return (
        <div className={cn(containerVariants({ variant, className }))} {...props}>
            {children}
        </div>
    );
}
