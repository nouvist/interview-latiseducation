import Button from "@/components/button";
import Input from "@/components/input";
import * as Lucide from "lucide-react";

export default function Login() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-md p-4 border rounded-lg bg-white border-gray-400">
                <h1 className="text-xl font-bold text-center">Masuk</h1>
                <p className="mb-2 text-center">Supaya gampang nantinya!</p>
                <div className="flex flex-col gap-2">
                    <Input
                        icon={<Lucide.User />}
                        type="email"
                        placeholder="Surel"
                    />
                    <Input
                        icon={<Lucide.Lock />}
                        type="password"
                        placeholder="Kata Sandi"
                    />
                    <Button className="self-end">Masuk</Button>
                </div>
            </div>
        </div>
    );
}
