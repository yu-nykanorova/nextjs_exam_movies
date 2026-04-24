"use client";

import {useRouter, useSearchParams} from "next/navigation";

const MAX_PAGES = 500;

export const Pagination = ({totalPages}: {totalPages: number}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    const handleClickPrev = () => {
        if (currentPage > 1) {
            const newParams = new URLSearchParams(String(searchParams));
            newParams.set("page", String(currentPage - 1));
            router.push(`/?${newParams.toString()}`);
        }
    }

    const handleClickNext = () => {
        if (currentPage < totalPages) {
            const newParams = new URLSearchParams(String(searchParams));
            newParams.set("page", String(currentPage + 1));
            router.push(`/?${newParams.toString()}`);
        }
    }

    return (
        <div className="max-w-100 mx-auto my-8 p-4 flex items-center justify-center gap-6">
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickPrev}
                disabled={currentPage === 1 || currentPage > MAX_PAGES}
            >
                Prev
            </button>
            <div>{currentPage <= MAX_PAGES ? currentPage : 0} / {totalPages <= MAX_PAGES ? totalPages : MAX_PAGES}</div>
            <button
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                onClick={handleClickNext}
                disabled={currentPage >= totalPages || currentPage === MAX_PAGES}
            >
                Next
            </button>
        </div>
    );
};