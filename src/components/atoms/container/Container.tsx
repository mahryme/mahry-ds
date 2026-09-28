import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const containerVariants = cva("mx-auto w-full max-w-[1360px]", {
    variants: {
        variant: {
            default: "px-5 py-5 md:px-10 md:py-8",
            "no-py": "px-5 py-0 md:px-10 md:py-0",
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
