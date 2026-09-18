import Form from "@/components/form";
import Input from "@/components/input";
import Shell, { ShellNavigation } from "@/components/shell";
import auth from "@/routes/auth";
import { DefaultPageProps } from "@/types";
import { LucideCircleX } from "lucide-react";

export interface ProfilePasswordProps extends DefaultPageProps {
    errors: {
        new_password?: string;
        current_password?: string;
    };
}

export default function ProfilePassword(props: ProfilePasswordProps) {
    return (
        <Shell
            title="Profil: Ganti Kata Sandi"
            navigation={ShellNavigation.profile}
        >
            <Form action={auth.password()}>
                <Form.Field
                    title="Kata Sandi Baru"
                    error={props.errors.new_password}
                >
                    <Input type="password" name="new_password" />
                </Form.Field>
                <Form.Field title="Konfirmasi Kata Sandi Baru">
                    <Input type="password" name="new_password_confirmation" />
                </Form.Field>
                <Form.Field
                    title="Kata Sandi Saat Ini"
                    error={props.errors.current_password}
                >
                    <Input type="password" name="current_password" />
                </Form.Field>
            </Form>
        </Shell>
    );
}

function Error({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <tr>
            <td colSpan={2}>
                <p
                    className="
                        flex px-3 h-10 gap-2 items-center
                        border rounded-lg bg-yellow-50 border-yellow-400
                    "
                >
                    <LucideCircleX />
                    {message}
                </p>
            </td>
        </tr>
    );
}
