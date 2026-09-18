import Button from "@/components/button";
import Form from "@/components/form";
import Input from "@/components/input";
import Shell, { ShellNavigation } from "@/components/shell";
import { password } from "@/routes";
import auth from "@/routes/auth";
import { Auth, DefaultPageProps } from "@/types";
import { Link } from "@inertiajs/react";

export interface ProfilePageProps extends DefaultPageProps {
    message?: string;
    errors: Record<keyof Auth, string | undefined>;
}

export default function ProfilePage({
    message,
    errors,
    ...props
}: ProfilePageProps) {
    return (
        <Shell title="Profil" navigation={ShellNavigation.profile}>
            <Form
                action={auth.store()}
                message={message}
                bottom={
                    <Link href={password()}>
                        <Button>Ganti Kata Sandi</Button>
                    </Link>
                }
            >
                <Form.Field title="Nama" error={errors.user}>
                    <Input name="name" defaultValue={props.auth.user.name} />
                </Form.Field>
            </Form>
        </Shell>
    );
}
