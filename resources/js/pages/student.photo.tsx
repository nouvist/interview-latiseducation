import Button from "@/components/button";
import File from "@/components/file";
import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import { Student } from "@/types";
import { Form } from "@inertiajs/react";
import { LucideSave } from "lucide-react";

export interface StudentPhotoPageProps {
    student?: Student;
    errors: { file?: string };
}

export default function StudentPhotoPage({
    errors,
    student,
}: StudentPhotoPageProps) {
    return (
        <Shell
            title={`Data Siswa: ${student?.name ?? "Baru"}`}
            navigation={ShellNavigation.data}
        >
            <Form action={students.storePhoto()} className="flex gap-2">
                <input
                    className="hidden"
                    name="id"
                    defaultValue={student!.id}
                />
                <File name="file" className="w-full" />
                <Button type="submit">
                    <LucideSave className="mr-2" />
                    <span>Simpan</span>
                </Button>
            </Form>
        </Shell>
    );
}
