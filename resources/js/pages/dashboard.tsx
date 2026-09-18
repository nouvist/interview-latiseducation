import Button from "@/components/button";
import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import { DefaultPageProps, Student } from "@/types";
import { Link, router } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import {
    LucideCheck,
    LucideDelete,
    LucideEdit,
    LucidePlus,
    LucideUser,
} from "lucide-react";

export interface DashboardPageProps extends DefaultPageProps {
    message?: string;
}

export default function DashboardPage({
    message,
    ...props
}: DashboardPageProps) {
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
                        <div className="flex gap-1">
                            <Button
                                className="flex justify-center items-center w-8 h-8 p-0"
                                onClick={() =>
                                    router.visit(
                                        students.show({ id: student.id! }),
                                    )
                                }
                            >
                                <LucideEdit size={16} />
                            </Button>
                            <Button
                                className="flex justify-center items-center w-8 h-8 p-0"
                                onClick={() =>
                                    router.visit(
                                        students.destroy({
                                            id: student.id!,
                                        }),
                                    )
                                }
                            >
                                <LucideDelete size={16} />
                            </Button>
                        </div>
                    ),
                }}
            />
        </Shell>
    );
}
