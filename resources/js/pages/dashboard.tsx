import Button from "@/components/button";
import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import { Student } from "@/types";
import { Link } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import { LucideEdit } from "lucide-react";

export default function DashboardPage() {
    const entrypoint = students.datatables();
    const columns = [
        { title: "Nama", data: "name" },
        { title: "Lembaga Siswa", data: "institution" },
        { title: "NIS", data: "number" },
        { title: "Surel", data: "email" },
        { data: null, orderable: false },
    ];

    return (
        <Shell title="Data Siswa" navigation={ShellNavigation.data}>
            <DataTable
                columns={columns}
                options={{ serverSide: true }}
                ajax={{
                    url: entrypoint.url,
                    type: entrypoint.method,
                }}
                slots={{
                    4: (student: Student) => (
                        <Link href={students.show({ student })}>
                            <Button className="flex justify-center items-center w-8 h-8 p-0">
                                <LucideEdit size={16} />
                            </Button>
                        </Link>
                    ),
                }}
            />
        </Shell>
    );
}
