import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {}

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "h-10 flex items-center px-3",
                "border border-b-2 cursor-pointer border-gray-400 rounded-md",
                "hover:bg-gray-100 active:bg-gray-200",
                className,
            )}
        >
            {children}
        </button>
    );
}
