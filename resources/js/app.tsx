import { createInertiaApp } from "@inertiajs/react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "./index.css";

DataTable.use(DT);

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: "#4B5563",
    },
});
