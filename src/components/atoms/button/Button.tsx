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
                    ? "bg-action-primary hover:bg-action-primary-hover text-action-on-primary font-label text-label-md px-4 py-2 rounded"
                    : "bg-action-secondary hover:bg-action-secondary-hover text-action-on-secondary font-label text-label-md px-4 py-2 rounded"
            }
        >
            {label}
        </button>
    );
}
