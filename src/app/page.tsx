import { Suspense } from 'react';
import GenresList from '../components/genres/GenresList';
import MoviesList from '../components/movies/MoviesList';
import {moviesService} from "@/src/services/movies.service";

type SearchParams = {
    page?: string;
    genres?: string;
    searchQuery?: string;
};

type Props = {
    searchParams: Promise<SearchParams>;
};

//export const dynamic = 'force-dynamic';

export default async function MoviesPage({searchParams}: Props) {
    const params = await searchParams;
    const pageKey = `${params.page}-${params.genres}-${params.searchQuery}`;

    const currentPage = Number(params.page || "1");

    const searchQuery = params.searchQuery || "";

    const genresList = await moviesService.getGenres();

    const selectedGenres = params.genres
        ? params.genres.split(",").map(Number)
        : [];

    return (
        <main className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Movies</h1>

            <GenresList selectedIds={selectedGenres} genres={genresList} />

            <Suspense key={pageKey} fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
                <MoviesList page={currentPage} genres={genresList} selectedGenres={selectedGenres} searchQuery={searchQuery} />
            </Suspense>

        </main>
    );
}