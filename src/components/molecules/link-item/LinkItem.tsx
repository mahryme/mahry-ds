import * as React from "react";
import { Link } from "../../atoms/link/Link";
import { cn } from "../../../lib/utils";

export type LinkItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    label?: string;
    description?: string;
};

export function LinkItem({
    className,
    asChild = false,
    label = "Link",
    description = "Description",
    ...props
}: LinkItemProps) {
    return (
        <div className={cn("flex w-full flex-col items-start", className)}>
            <Link
                asChild={asChild}
                label={label}
                className="text-fg-primary"
                {...props}
            />
            <p className="line-clamp-3 w-full font-label text-label-md text-fg-secondary">
                {description}
            </p>
        </div>
    );
}
