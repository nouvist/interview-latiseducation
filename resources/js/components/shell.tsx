import { ComponentProps, PropsWithChildren, useState } from "react";
import * as Lucide from "lucide-react";
import { cn } from "@/lib/utils";
import { router } from "@inertiajs/react";

export enum ShellNavigation {
    data,
    profile,
    about,
}

export interface ShellProps extends PropsWithChildren {
    title?: string;
    navigation?: ShellNavigation;
}

export default function Shell({ title, navigation, children }: ShellProps) {
    function handleNavigation(navigation: ShellNavigation) {
        const url = {
            [ShellNavigation.data]: "/dashboard",
            [ShellNavigation.profile]: "/profile",
            [ShellNavigation.about]: "/about",
        }[navigation];
        router.visit(url);
    }

    return (
        <div key="Shell" className="flex p-4 gap-4">
            <div
                className="
                    h-min sticky top-4 z-10
                    outline-1 rounded-lg bg-white outline-gray-400 p-1
                "
            >
                <_Navigation
                    active={navigation == ShellNavigation.data}
                    onClick={() => handleNavigation(ShellNavigation.data)}
                    tooltip="Data Siswa"
                >
                    <Lucide.Database />
                </_Navigation>
                <_Navigation
                    active={navigation == ShellNavigation.profile}
                    onClick={() => handleNavigation(ShellNavigation.profile)}
                    tooltip="Profil"
                >
                    <Lucide.User />
                </_Navigation>
                <_Navigation
                    active={navigation == ShellNavigation.about}
                    onClick={() => handleNavigation(ShellNavigation.about)}
                    tooltip="Tentang"
                >
                    <Lucide.BadgeInfo />
                </_Navigation>
                <_Navigation tooltip="Keluar">
                    <Lucide.LogOut />
                </_Navigation>
            </div>
            <div className="flex-1 max-w-5xl">
                <h1
                    className="
                        sticky w-max px-4 py-2 top-4 mb-2 z-0
                        outline-1 rounded-lg bg-white outline-gray-400 p-1
                        text-xl font-bold
                    "
                >
                    {title}
                </h1>
                <div>{children}</div>
            </div>
        </div>
    );
}

interface _NavigationProps extends ComponentProps<"button"> {
    active?: boolean;
    tooltip: string;
}

function _Navigation({
    active,
    tooltip,
    children,
    ...props
}: _NavigationProps) {
    return (
        <button
            {...props}
            className={cn(
                "relative group cursor-pointer",
                "flex justify-center items-center w-12 h-12 rounded-md",
                "hover:bg-gray-100",
                active && "bg-gray-200 hover:bg-gray-300",
            )}
        >
            {children}
            <div
                className={cn(
                    "absolute left-0 w-1 h-2 opacity-0 rounded-full bg-red-400",
                    active && "h-6 opacity-100",
                )}
            />
            <div
                className="
                    pointer-events-none absolute w-max px-3 py-1
                    outline-1 rounded-lg bg-white outline-gray-400
                    transition-all left-12 opacity-0 group-hover:left-16 group-hover:opacity-100
                "
            >
                {tooltip}
            </div>
        </button>
    );
}
