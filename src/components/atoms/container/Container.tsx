import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const containerVariants = cva("mx-auto w-full", {
    variants: {
        type: {
            default: "max-w-[1360px] px-5 py-5 md:px-10 md:py-8",
            nav: "max-w-[1360px] px-5 py-2 md:px-10 md:py-3",
            blog: "max-w-3xl px-5 py-5 md:px-10 md:py-8",
        },
    },
    defaultVariants: { type: "default" },
});

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof containerVariants>;

export function Container({
    className,
    type,
    children,
    ...props
}: ContainerProps) {
    return (
        <div className={cn(containerVariants({ type, className }))} {...props}>
            {children}
        </div>
    );
}
