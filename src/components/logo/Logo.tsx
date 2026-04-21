import Link from "next/dist/client/link";
import {LogoIcon} from "@/src/components/icons/LogoIcon";

export const Logo = () => {
    return (
        <Link href="/" className="h-full flex flex-col items-center justify-center gap-1 cursor-pointer transition hover:text-brand-light-blue sm:flex-row">
            <LogoIcon/>
            <p className="font-secondary text-sm sm:text-xl">movies DB</p>
        </Link>
    );
};