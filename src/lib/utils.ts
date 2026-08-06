import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": [
                {
                    text: [
                        "display-xl",
                        "display-lg",
                        "display-md",
                        "heading-lg",
                        "heading-md",
                        "heading-sm",
                        "body-lg",
                        "body-md",
                        "body-sm",
                        "label-lg",
                        "label-md",
                        "label-sm",
                        "caption-default",
                    ],
                },
            ],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
