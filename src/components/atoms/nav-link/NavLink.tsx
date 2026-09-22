import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

export type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    label?: string;
    isCurrent?: boolean;
};

export function NavLink({
    className,
    asChild = false,
    label = "Label",
    isCurrent = false,
    children,
    ...props
}: NavLinkProps) {
    const Comp = asChild ? Slot : "a";

    return (
        <Comp
            className={cn(
                "py-1 rounded-sm font-label text-label-md whitespace-nowrap outline-none transition-colors duration-200 ease-out focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                isCurrent
                    ? "text-fg-primary"
                    : "text-fg-tertiary underline decoration-fg-primary/40 underline-offset-[3px] hover:decoration-fg-primary",
                className,
            )}
            aria-current={isCurrent ? "location" : undefined}
            {...props}
        >
            {asChild ? children : label}
        </Comp>
    );
}
