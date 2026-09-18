import { Form as RawForm } from "@inertiajs/react";
import { LucideCheck, LucideCircleX } from "lucide-react";
import { ComponentProps, Fragment, PropsWithChildren, ReactNode } from "react";
import Button from "./button";

export interface FormProps extends ComponentProps<typeof RawForm> {
    message?: string;
    children: React.ReactNode;
}

function Form({ message, children, ...props }: FormProps) {
    return (
        <RawForm {...props}>
            <table className="w-full border-separate border-spacing-y-2 box-border">
                <tbody>{children}</tbody>
            </table>
            {message && (
                <p
                    className="
                        w-full flex px-3 h-10 gap-2 mb-2 items-center
                        border rounded-lg bg-blue-50 border-blue-400
                    "
                >
                    <LucideCheck />
                    {message}
                </p>
            )}
            <div className="flex justify-end">
                <Button type="submit">Simpan</Button>
            </div>
        </RawForm>
    );
}

export interface FormFieldProps {
    title: string;
    error?: string;
    children?: ReactNode;
}

function FormField({ title, error, children }: FormFieldProps) {
    return (
        <Fragment>
            <tr>
                <td>{title}</td>
                <td>{children}</td>
            </tr>
            {error && (
                <tr>
                    <td colSpan={2}>
                        <p
                            className="
                                flex px-3 h-10 gap-2 items-center
                                border rounded-lg bg-yellow-50 border-yellow-400
                            "
                        >
                            <LucideCircleX />
                            {error}
                        </p>
                    </td>
                </tr>
            )}
        </Fragment>
    );
}

function FormHiddenField({ children }: PropsWithChildren) {
    return <div className="hidden">{children}</div>;
}

export default Object.assign(Form, {
    Field: FormField,
    HiddenField: FormHiddenField,
});
