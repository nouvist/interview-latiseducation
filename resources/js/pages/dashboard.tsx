import Shell, { ShellNavigation } from "@/components/shell";
import DataTable from "datatables.net-react";
import { Fragment } from "react/jsx-runtime";

export default function Dashboard() {
    const columns = [
        { title: "Nama", data: "name" },
        { title: "Lembaga Siswa", data: "org" },
        { title: "NIS", data: "nis" },
        { title: "Surel", data: "email" },
        { title: "aksi", data: null, orderable: false },
    ];

    const data = [
        {
            name: "Ayam Goreng",
            org: "LatisEducation",
            nis: "2026001",
            email: "ayam.goreng@latiseducation.com",
        },
        {
            name: "Galon Isi Ulang",
            org: "TutorIndonesia",
            nis: "2026002",
            email: "galon.isi.ulang@tutorindonesia.com",
        },
        {
            name: "Yanto",
            org: "LatisEducation",
            nis: "2026003",
            email: "yanto@latiseducation.com",
        },
    ];

    return (
        <Shell title="Data Siswa" navigation={ShellNavigation.data}>
            <DataTable
                columns={columns}
                data={data}
                slots={{
                    4: (item: (typeof data)[number]) => (
                        <Fragment>galon</Fragment>
                    ),
                }}
            />
        </Shell>
    );
}
