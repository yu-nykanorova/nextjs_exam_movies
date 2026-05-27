"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {IGenre} from "@/src/models/genre/IGenre";
import GenreBadge from "@/src/components/genres/GenreBadge";

type GenresListProps = {
    genres: IGenre[];
    selectedIds: number[];
}

export default function GenresList({ selectedIds, genres }: GenresListProps){
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = (id: number) => {
        const newParams = new URLSearchParams(searchParams.toString());

        newParams.delete("searchQuery");

        const updatedGenres = selectedIds.includes(id)
            ? selectedIds.filter(itemId => itemId !== id)
            : [...selectedIds, id];

        if (updatedGenres.length > 0) {
            newParams.set("genres", updatedGenres.join(","));
        } else {
            newParams.delete("genres");
        }

        newParams.set("page", "1");

        router.push(`/?${newParams.toString()}`);
    };

    return (
        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(120px,auto))] gap-2 whitespace-nowrap">
            {genres.map((genre) => (
                <GenreBadge
                    key={genre.id}
                    genre={genre}
                    onClick={() => handleClick(genre.id)}
                    className={`px-3 py-1 rounded-md cursor-pointer transition text-[14px] ${!selectedIds.includes(genre.id) ? "text-brand-white bg-brand-gray hover:text-brand-light-blue hover:bg-neutral-600" : "text-brand-black font-semibold bg-brand-light-blue"}`}
                />
            ))}
        </div>
    );
};