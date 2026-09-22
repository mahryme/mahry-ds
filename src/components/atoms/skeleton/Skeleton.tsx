import * as React from "react";
import { cn } from "../../../lib/utils";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                "animate-pulse rounded-lg bg-container-low motion-reduce:animate-none",
                className,
            )}
            {...props}
        />
    );
}
