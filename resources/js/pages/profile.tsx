import Shell, { ShellNavigation } from "@/components/shell";

export default function Profile() {
    return (
        <Shell title="Profile" navigation={ShellNavigation.profile}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            provident inventore sed quos quisquam ducimus quidem repellat
            necessitatibus esse. Eum porro labore magnam numquam laudantium ut
            aut ducimus perferendis adipisci!
        </Shell>
    );
}
