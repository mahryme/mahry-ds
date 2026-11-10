import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/utils";

export type TabsProps = React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.Root
>;

export function Tabs(props: TabsProps) {
    return <TabsPrimitive.Root {...props} />;
}

export type TabsListProps = React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.List
>;

export function TabsList({ className, ...props }: TabsListProps) {
    return (
        <TabsPrimitive.List
            className={cn(
                "inline-flex items-center gap-0 p-1 rounded-lg border border-border-secondary bg-container-high",
                className,
            )}
            {...props}
        />
    );
}

export type TabsPanelProps = React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.Content
>;

export function TabsPanel({ className, ...props }: TabsPanelProps) {
    return (
        <TabsPrimitive.Content
            className={cn(
                "outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus rounded-sm",
                className,
            )}
            {...props}
        />
    );
}
