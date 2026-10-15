import * as React from "react";
import { Link } from "../../atoms/link/Link";
import { Badge } from "../../atoms/badge/Badge";
import { cn } from "../../../lib/utils";

export type LinkItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    label?: string;
    description?: string;
    status?: "available" | "coming-soon";
};

export function LinkItem({
    className,
    asChild = false,
    label = "Link",
    description = "Description",
    status = "available",
    ...props
}: LinkItemProps) {
    const isComingSoon = status === "coming-soon";

    return (
        <div className={cn("flex w-full flex-col items-start", className)}>
            {isComingSoon ? (
                <div className="flex items-center gap-2">
                    <span className="py-1 font-label text-label-md text-fg-secondary">
                        {label}
                    </span>
                    <Badge>Coming soon</Badge>
                </div>
            ) : (
                <Link
                    asChild={asChild}
                    label={label}
                    className="text-fg-primary"
                    {...props}
                />
            )}
            <p
                className={cn(
                    "line-clamp-3 w-full font-label text-label-md",
                    isComingSoon ? "text-fg-tertiary" : "text-fg-secondary",
                )}
            >
                {description}
            </p>
        </div>
    );
}
