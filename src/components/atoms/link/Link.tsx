import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/utils";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    label?: string;
};

export function Link({
    className,
    asChild = false,
    label = "Link",
    children,
    ...props
}: LinkProps) {
    const Comp = asChild ? Slot : "a";

    return (
        <Comp
            className={cn(
                "rounded-sm font-label text-label-md text-action-on-ghost underline decoration-action-on-ghost/40 underline-offset-[3px] outline-none transition-colors duration-200 ease-out hover:decoration-action-on-ghost focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
                className,
            )}
            {...props}
        >
            {asChild ? children : label}
        </Comp>
    );
}
