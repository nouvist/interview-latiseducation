import Shell, { ShellNavigation } from "@/components/shell";
import students from "@/routes/students";
import DataTable from "datatables.net-react";
import { Fragment } from "react/jsx-runtime";

export default function Dashboard() {
    const entrypoint = students.datatables();
    const columns = [
        { title: "Nama", data: "name" },
        { title: "Lembaga Siswa", data: "organization" },
        { title: "NIS", data: "number" },
        { title: "Surel", data: "email" },
        { title: "aksi", data: null, orderable: false },
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
                    4: () => <Fragment>galon</Fragment>,
                }}
            />
        </Shell>
    );
}
