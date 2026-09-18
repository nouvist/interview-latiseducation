import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface SelectProps extends ComponentProps<"select"> {}

export default function Select({ className, children, ...props }: SelectProps) {
    return (
        <select
            {...props}
            className={cn(
                "h-10 flex items-center px-3",
                "border border-b-2 cursor-pointer border-gray-400 rounded-md",
                "hover:bg-gray-100 active:bg-gray-200",
                "[&:after]:hidden",
                className,
            )}
        >
            {children}
        </select>
    );
}
