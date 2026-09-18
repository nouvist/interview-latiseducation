import { cn } from "@/lib/utils";
import { LucideFile } from "lucide-react";
import { ChangeEvent, ComponentProps, useState } from "react";

export interface FileProps extends Omit<ComponentProps<"input">, "type"> {}

export default function File({ className, ...props }: FileProps) {
    const [path, setPath] = useState<string | undefined>();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        setPath(file?.name);
        props.onChange?.(event);
    }

    return (
        <label
            className={cn(
                "flex gap-2 h-10 items-center px-3",
                "border border-b-2 cursor-pointer rounded-md",
                "border-gray-400 hover:bg-gray-100 active:bg-gray-200",
                path && "has-valid:border-b-red-400",
                className,
            )}
        >
            <input
                {...props}
                type="file"
                className="hidden"
                onChange={handleChange}
            />
            <LucideFile />
            <p>{path ?? "Pilih berkas"}</p>
            {props.children}
        </label>
    );
}
