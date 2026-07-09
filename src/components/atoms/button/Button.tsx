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
                    ? "bg-blue-600 text-white px-4 py-2 rounded"
                    : "bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded"
            }
        >
            {label}
        </button>
    );
}
