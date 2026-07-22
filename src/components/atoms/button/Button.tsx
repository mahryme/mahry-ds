import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-1 h-9 rounded-lg px-3 py-2 font-label text-label-lg whitespace-nowrap transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
    {
        variants: {
            variant: {
                primary:
                    "bg-action-primary text-action-on-primary hover:bg-action-primary-hover active:bg-action-primary-press disabled:bg-action-primary-disabled disabled:text-action-on-primary-disabled",
                secondary:
                    "bg-action-secondary text-action-on-secondary hover:bg-action-secondary-hover active:bg-action-secondary-press disabled:bg-action-secondary-disabled disabled:text-action-on-secondary-disabled",
                tertiary:
                    "bg-action-tertiary text-action-on-tertiary border border-action-tertiary-border hover:bg-action-tertiary-hover active:bg-action-tertiary-press disabled:bg-action-tertiary-disabled disabled:text-action-on-tertiary-disabled disabled:border-action-tertiary-border-disabled",
                ghost: "bg-transparent text-action-on-ghost hover:bg-action-ghost-hover active:bg-action-ghost-press disabled:text-action-on-ghost-disabled",
            },
        },
        defaultVariants: { variant: "primary" },
    },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
        label?: string;
        hasIconLeft?: boolean;
        iconLeft?: React.ReactNode;
        hasIconRight?: boolean;
        iconRight?: React.ReactNode;
        isDisabled?: boolean;
    };

export function Button({
    className,
    variant,
    asChild = false,
    label = "Button",
    hasIconLeft = false,
    iconLeft = null,
    hasIconRight = false,
    iconRight = null,
    isDisabled = false,
    children,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={cn(buttonVariants({ variant, className }))}
            disabled={!asChild ? isDisabled : undefined}
            aria-disabled={isDisabled || undefined}
            {...props}
        >
            {asChild ? (
                children
            ) : (
                <>
                    {hasIconLeft && (
                        <span className="shrink-0 size-4">{iconLeft}</span>
                    )}
                    {label}
                    {hasIconRight && (
                        <span className="shrink-0 size-4">{iconRight}</span>
                    )}
                </>
            )}
        </Comp>
    );
}
