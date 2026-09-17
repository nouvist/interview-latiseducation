import Shell, { ShellNavigation } from "@/components/shell";

export default function About() {
    return (
        <Shell title="Tentang" navigation={ShellNavigation.about}>
            <p>
                Dibangun dalam rangka menyelesaikan uji kecakapan di rumah untuk
                PT. Latis Teknologi Indonesia.
            </p>
            <table className="border-separate border-spacing-x-4 -mx-4">
                <tbody>
                    <tr>
                        <td>Nama</td>
                        <td>Nouvistiardi Azra Arrafi'i</td>
                    </tr>
                    <tr>
                        <td>Posisi</td>
                        <td>IT Specialist</td>
                    </tr>
                </tbody>
            </table>
        </Shell>
    );
}
