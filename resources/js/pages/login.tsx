import Button from "@/components/button";
import Input from "@/components/input";
import { cn } from "@/lib/utils";
import auth from "@/routes/auth";
import { Form, useForm } from "@inertiajs/react";
import * as Lucide from "lucide-react";

export interface LoginProps {
    errors: {
        message?: string;
    };
}

export default function Login({ errors }: LoginProps) {
    const form = useForm(() => ({
        email: "",
        password: "",
    }));

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Form
                action={auth.login()}
                className="w-sm p-4 border rounded-lg bg-white border-gray-400"
            >
                <h1 className="text-xl font-bold text-center">Masuk</h1>
                <p className="mb-2 text-center">Supaya gampang nantinya!</p>
                <div className="flex flex-col gap-2">
                    <Input
                        icon={<Lucide.User />}
                        type="email"
                        name="email"
                        placeholder="Surel"
                    />
                    <Input
                        icon={<Lucide.Lock />}
                        type="password"
                        name="password"
                        placeholder="Kata Sandi"
                    />
                    <p
                        className={cn(
                            "px-3 h-10 gap-2 items-center",
                            "border rounded-lg bg-yellow-50 border-yellow-400 hidden",
                            errors.message && "flex",
                        )}
                    >
                        <Lucide.CircleX />
                        {errors.message}
                    </p>
                    <Button className="self-end">Masuk</Button>
                </div>
            </Form>
        </div>
    );
}
