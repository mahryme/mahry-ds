type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
};

export function Button({ label, variant = "primary", onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={
                variant === "primary"
                    ? "bg-accent hover:bg-accent-hover text-on-accent font-label text-label-md px-4 py-2 rounded"
                    : "bg-secondary hover:bg-secondary-hover border border-secondary-border text-on-secondary font-label text-label-md px-4 py-2 rounded"
            }
        >
            {label}
        </button>
    );
}
