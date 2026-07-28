import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

export const iconButtonVariants = cva(
    "inline-flex items-center justify-center shrink-0 size-9 p-2 rounded-lg outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
    {
        variants: {
            variant: {
                primary:
                    "bg-action-primary text-action-on-primary hover:bg-action-primary-hover active:bg-action-primary-press disabled:bg-action-primary-disabled disabled:text-action-on-primary-disabled",
                secondary:
                    "bg-action-secondary text-action-on-secondary hover:bg-action-secondary-hover active:bg-action-secondary-press disabled:bg-action-secondary-disabled disabled:text-action-on-secondary-disabled",
                tertiary:
                    "bg-action-tertiary text-action-on-tertiary border border-action-tertiary-border hover:bg-action-tertiary-hover active:bg-action-tertiary-press disabled:bg-action-tertiary-disabled disabled:text-action-on-tertiary-disabled disabled:border-action-tertiary-border-disabled",
            },
        },
        defaultVariants: { variant: "primary" },
    },
);

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof iconButtonVariants> & {
        asChild?: boolean;
        icon: React.ReactNode;
        label: string;
        isDisabled?: boolean;
    };

export function IconButton({
    className,
    variant,
    asChild = false,
    icon,
    label,
    isDisabled = false,
    children,
    ...props
}: IconButtonProps) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={cn(iconButtonVariants({ variant, className }))}
            disabled={!asChild ? isDisabled : undefined}
            aria-disabled={isDisabled || undefined}
            aria-label={label}
            {...props}
        >
            {asChild ? (
                children
            ) : (
                <span className="shrink-0 size-5">{icon}</span>
            )}
        </Comp>
    );
}
