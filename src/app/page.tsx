import {MainPoster} from "@/src/components/movies/MainPoster";
import {GenresList} from "@/src/components/genres/GenresList";
import {MoviesList} from "@/src/components/movies/MoviesList";
import {moviesService} from "@/src/services/movies.service";
import {Pagination} from "@/src/components/pagination/Pagination";

type SearchParams = {
    page?: string;
    genres?: string;
    searchQuery?: string;
};

type Props = {
    searchParams: Promise<SearchParams>;
};

export default async function MoviesPage ({searchParams}: Props) {
    const params = await searchParams;

    const genresList = await moviesService.getGenres();

    const currentPage = Number(params.page || "1");

    const searchQuery = params.searchQuery || "";

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
        <GenresList genres={genresList} selected={selectedGenres}/>
        <MoviesList movies={moviesToShow}/>
        <Pagination totalPages={totalPages}/>
    </>
  );
}
