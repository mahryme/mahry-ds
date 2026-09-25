import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { NavLink, type NavLinkProps } from "../../atoms/nav-link/NavLink";

export type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav">;

export function Breadcrumb({ ...props }: BreadcrumbProps) {
    return <nav aria-label="breadcrumb" {...props} />;
}

export type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol">;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
    return (
        <ol
            className={cn("flex flex-wrap items-center gap-1", className)}
            {...props}
        />
    );
}

export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
    return <li className={cn("inline-flex items-center", className)} {...props} />;
}

export type BreadcrumbLinkProps = Omit<NavLinkProps, "isCurrent">;

export function BreadcrumbLink(props: BreadcrumbLinkProps) {
    return <NavLink {...props} />;
}

export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span">;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
    return (
        <span
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={cn("font-label text-label-md text-fg-primary", className)}
            {...props}
        />
    );
}

export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li">;

export function BreadcrumbSeparator({
    className,
    children,
    ...props
}: BreadcrumbSeparatorProps) {
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={cn(
                "inline-flex items-center text-fg-tertiary [&>svg]:size-3",
                className,
            )}
            {...props}
        >
            {children ?? <ChevronRight strokeWidth={1.5} />}
        </li>
    );
}
