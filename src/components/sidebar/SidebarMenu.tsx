"use client";

import Link from "next/dist/client/link";
import {usePathname} from "next/dist/client/components/navigation";
import {HomeIcon} from "@/src/components/icons/HomeIcon";
import {HeartIcon} from "@/src/components/icons/HeartIcon";
import {CalendarIcon} from "@/src/components/icons/CalendarIcon";
import {SettingsIcon} from "@/src/components/icons/SettingsIcon";

export const SidebarMenu = () => {
    const pathName = usePathname();
    const commonLinkClass = "flex items-center justify-center gap-2 hover:text-brand-light-blue sm:justify-start";
    const activeLinkClass = `${commonLinkClass} text-brand-light-blue`;

    return (
        <nav>
            <ul className="flex flex-col gap-10">
                <li>
                    <Link href="/" className={pathName === "/" ? activeLinkClass : commonLinkClass}>
                        <HomeIcon/>
                        <p className="text-sm hidden sm:block">Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/favorites" className={pathName === "/favorites" ? activeLinkClass : commonLinkClass}>
                        <HeartIcon/>
                        <p className="text-sm hidden sm:block">Favorites</p>
                    </Link>
                </li>
                <li>
                    <Link href="/upcoming" className={pathName === "/upcoming" ? activeLinkClass : commonLinkClass}>
                        <CalendarIcon/>
                        <p className="text-sm hidden sm:block">Coming soon</p>
                    </Link>
                </li>
                <li>
                    <Link href="/settings" className={pathName === "/settings" ? activeLinkClass : commonLinkClass}>
                        <SettingsIcon/>
                        <p className="text-sm hidden sm:block">Settings</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};