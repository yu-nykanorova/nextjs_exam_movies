import {LogoIcon} from "@/src/components/icons/LogoIcon";
import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/" className="h-full flex flex-col items-center justify-center gap-1 cursor-pointer transition hover:text-brand-light-blue sm:flex-row">
            <LogoIcon/>
            <p className="text-sm sm:text-xl font-secondary">movies DB</p>
        </Link>
    );
};