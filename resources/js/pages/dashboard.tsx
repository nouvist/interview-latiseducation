import Button from "@/components/button";
import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import { Student } from "@/types";
import { Link } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import { LucideEdit, LucidePlus, LucideUser } from "lucide-react";

export default function DashboardPage() {
    const entrypoint = students.datatables();
    const columns = [
        { data: null, orderable: false },
        { title: "Nama", data: "name" },
        { title: "Lembaga Siswa", data: "institution" },
        { title: "NIS", data: "number" },
        { title: "Surel", data: "email" },
        { data: null, orderable: false },
    ];

    return (
        <Shell
            title="Data Siswa"
            navigation={ShellNavigation.data}
            top={
                <Link href={students.create()}>
                    <Button>
                        <LucidePlus className="mr-2" />
                        <span>Baru</span>
                    </Button>
                </Link>
            }
        >
            <DataTable
                columns={columns}
                options={{ serverSide: true }}
                ajax={{
                    url: entrypoint.url,
                    type: entrypoint.method,
                }}
                slots={{
                    0: (student: Student) => (
                        <div
                            className="
                                min-w-8 max-w-8 h-8 mr-2
                                flex justify-center items-center bg-gray-200
                            "
                        >
                            {student.photo_url ? (
                                <img
                                    className="w-full h-full object-cover"
                                    src={student.photo_url}
                                />
                            ) : (
                                <LucideUser />
                            )}
                        </div>
                    ),
                    5: (student: Student) => (
                        <Link href={students.show({ id: student.id! })}>
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
