import {ArrowDownIcon} from "@/src/components/icons/ArrowDownIcon";
import Image from "next/image";

export const UserInfo = () => {
    return (
        <div className="h-full flex flex-col items-center justify-between gap-0 sm:flex-row sm:gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-[50%] sm:w-12 sm:h-12">
                <Image
                    src="/images/avatar_mockup.jpg"
                    alt="user avatar"
                    width={48}
                    height={48}
                    className="h-full rounded-[50%]"
                    priority
                />
            </div>
            <div className="h-full flex flex-col items-center justify-center">
                <p className="text-xs sm:text-sm">Username</p>
                <ArrowDownIcon/>
            </div>
        </div>
    );
};