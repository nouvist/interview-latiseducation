import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

export interface InputProps extends ComponentProps<"input"> {
    icon?: ReactNode;
}

export default function Input({ className, icon, ...props }: InputProps) {
    return (
        <label
            className={cn(
                "h-10 flex items-center px-3 gap-2",
                "border border-gray-400 rounded-md",
                "has-[input:focus]:border-b-red-400 border-b-2",
                className
            )}
        >
            {icon}
            <input
                {...props}
                className="focus:outline-0 w-full h-full placeholder-gray-400"
            />
        </label>
    );
}
