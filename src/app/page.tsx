import { Suspense } from 'react';
import GenresList from '../components/genres/GenresList';
import MoviesList from '../components/movies/MoviesList';
import {moviesService} from "@/src/services/movies.service";
import Pagination from "@/src/components/pagination/Pagination";
import MainPoster from "@/src/components/movies/MainPoster";
import Loading from "@/src/app/loading";

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

    const moviesData = searchQuery
        ? await moviesService.searchMovies({page: currentPage, query: searchQuery})
        : await moviesService.getMovies({ page: currentPage, genresIds: selectedGenres});

    const moviesToShow = moviesData.movies;
    const totalPages = moviesData.totalPages;

    const mainMovie = moviesToShow.length
        ? [...moviesToShow].sort((a, b) => b.vote_average - a.vote_average)[0]
        : null;

    return (
        <>
            <MainPoster movie={mainMovie}/>
            <GenresList selectedIds={selectedGenres} genres={genresList} />
            <Suspense key={pageKey} fallback={<div className="h-80 flex items-center justify-center"><Loading/></div>}>
                <MoviesList movies={moviesToShow} genres={genresList} />
            </Suspense>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};