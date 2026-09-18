import Button from "@/components/button";
import Shell, { ShellNavigation } from "@/components/shell";
import { DefaultPageProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function Profile(props: DefaultPageProps) {
    return (
        <Shell title="Profil" navigation={ShellNavigation.profile}>
            <p className="mb-2">Kamu masuk sebagai {props.auth.user.name}.</p>
            <Link href="/profile/password">
                <Button>Ganti Kata Sandi</Button>
            </Link>
        </Shell>
    );
}
