import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const tabVariants = cva(
    "inline-flex items-center justify-center gap-1 px-3 py-1 rounded-md font-label text-label-md whitespace-nowrap outline-none transition-colors duration-200 ease-out focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-border-focus disabled:pointer-events-none disabled:text-fg-disabled",
    {
        variants: {
            variant: {
                pill: "text-fg-secondary hover:text-fg-primary data-[state=active]:bg-action-secondary data-[state=active]:text-action-on-secondary data-[state=active]:hover:text-action-on-secondary",
            },
        },
        defaultVariants: { variant: "pill" },
    },
);

export type TabProps = Omit<
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    "asChild"
> &
    VariantProps<typeof tabVariants> & {
        label?: string;
        iconLeft?: React.ReactNode;
    };

export function Tab({
    className,
    variant,
    label = "Tab",
    iconLeft,
    children,
    ...props
}: TabProps) {
    return (
        <TabsPrimitive.Trigger
            className={cn(tabVariants({ variant, className }))}
            {...props}
        >
            {iconLeft ? (
                <span className="inline-flex size-5 shrink-0 items-center justify-center [&>svg]:size-full">
                    {iconLeft}
                </span>
            ) : null}
            {children ?? label}
        </TabsPrimitive.Trigger>
    );
}
