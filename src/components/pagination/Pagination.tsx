"use client";

import { useRouter, useSearchParams } from 'next/navigation';

const MAX_PAGES = 500;

type PaginationProps = {
    totalPages: number;
    currentPage: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePage = (step: number) => {
        const newParams = new URLSearchParams(searchParams.toString());

        const newPage = currentPage + step;
        newParams.set("page", newPage.toString());

        router.push(`/?${newParams.toString()}`);
    };

    return (
        <div className="max-w-100 mx-auto my-8 p-4 flex items-center justify-center gap-6">
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => handlePage(-1)}
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
                ← Prev
            </button>

            <div>{currentPage <= totalPages ? currentPage : 0} / {totalPages <= MAX_PAGES ? totalPages : MAX_PAGES}</div>

            <button
                type="button"
                disabled={currentPage >= totalPages || currentPage === MAX_PAGES}
                onClick={() => handlePage(1)}
                className="px-3 py-1 flex items-center justify-center text-brand-black text-md bg-brand-light-blue rounded-md shadow-md enabled:hover:bg-brand-white transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            >
                Next →
            </button>
        </div>
    );
}