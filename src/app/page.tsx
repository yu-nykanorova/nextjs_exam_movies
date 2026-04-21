import {MainPoster} from "@/src/components/movies/MainPoster";
import {GenresList} from "@/src/components/genres/GenresList";
import {MoviesList} from "@/src/components/movies/MoviesList";

export default function MoviesPage() {
  return (
    <>
        <MainPoster/>
        <GenresList/>
        <MoviesList/>
    </>
  );
}
