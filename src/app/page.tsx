import {MainPoster} from "@/src/components/movies/MainPoster";
import {GenresList} from "@/src/components/genres/GenresList";
import {MoviesList} from "@/src/components/movies/MoviesList";
import {moviesService} from "@/src/services/movies.service";
import {MoviesListCard} from "@/src/components/movies/movie-card/MoviesListCard";

export default async function MoviesPage () {
    const moviesData = await moviesService.getMovies();
    const moviesList = moviesData.movies;
    const genresList = await moviesService.getGenres();

    console.log(moviesList);

    return (
    <>
        <MainPoster/>
        <GenresList genres={genresList}/>
        <MoviesList movies={moviesList}/>
    </>
  );
}
