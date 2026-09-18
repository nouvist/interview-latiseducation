import Form from "@/components/form";
import Input from "@/components/input";
import Select from "@/components/select";
import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import { Student } from "@/types";

export interface StudentPageProps {
    student?: Student;
    message?: string;
    errors: { [Key in keyof Student]?: string };
}

export default function StudentPage({
    message,
    errors,
    student,
}: StudentPageProps) {
    return (
        <Shell
            title={`Data Siswa: ${student?.name ?? "Baru"}`}
            navigation={ShellNavigation.data}
        >
            <Form action={students.store()} message={message}>
                {student?.id && (
                    <Form.HiddenField>
                        <Input name="id" defaultValue={student!.id} />
                    </Form.HiddenField>
                )}
                <Form.Field title="Nama" error={errors.name}>
                    <Input name="name" defaultValue={student?.name} />
                </Form.Field>
                <Form.Field title="Surel" error={errors.email}>
                    <Input name="email" defaultValue={student?.email} />
                </Form.Field>
                <Form.Field title="NIS" error={errors.number}>
                    <Input name="number" defaultValue={student?.number} />
                </Form.Field>
                <Form.Field title="Lembaga" error={errors.institution}>
                    <Select
                        className="w-full"
                        name="institution"
                        defaultValue={student?.institution}
                    >
                        <option value="LatisEducation">Latis Education</option>
                        <option value="TutorIndonesia">Tutor Indonesia</option>
                    </Select>
                </Form.Field>
            </Form>
        </Shell>
    );
}
