import {MainPoster} from "@/src/components/movies/MainPoster";
import {GenresList} from "@/src/components/genres/GenresList";
import {MoviesList} from "@/src/components/movies/MoviesList";
import {moviesService} from "@/src/services/movies.service";

type SearchParams = {
    page?: string;
    genres?: string;
    searchQuery?: string;
};

type Props = {
    searchParams: SearchParams;
};

export default async function MoviesPage ({searchParams}: Props) {
    const params = await searchParams;
    console.log(params);

    const genresList = await moviesService.getGenres();

    const currentPage = Number(searchParams.page || "1");

    // const searchQuery = searchParams.searchQuery || "";

    const paramGenres = searchParams.genres;

    // console.log(paramGenres);

    const selectedGenres = paramGenres
        ? paramGenres.split(",").map(Number)
        : [];

    console.log(selectedGenres);

    const moviesData = await moviesService.getMovies({
        page: currentPage,
        genresIds: selectedGenres,
    });

    const moviesToShow = moviesData.movies;

    // console.log("searchParams:", searchParams);

    return (
    <>
        <MainPoster/>
        <GenresList genres={genresList} selected={selectedGenres}/>
        <MoviesList movies={moviesToShow}/>
    </>
  );
}
