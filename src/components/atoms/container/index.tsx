import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("", {
    variants: {
        type: {
            default: "max-w-screen-xl",
            blog: "max-w-screen-md gap-8",
            nav: "max-w-screen-xl px-5 py-2 md:px-10 py-5",
        },
    },
    defaultVariants: {
        type: "default",
    },
});

function Container({
    children,
    type,
    className,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
    return (
        <div
            data-slot="container"
            className={cn(containerVariants({ type }), className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { Container, containerVariants };
