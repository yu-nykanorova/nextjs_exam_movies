import MoviesListCard from './movie-card/MoviesListCard';
import {IGenre} from "@/src/models/genre/IGenre";
import {IMovieShort} from "@/src/models/movie/IMovie";

type MoviesProps = {
    movies: IMovieShort[];
    genres: IGenre[];
}

export default async function MoviesList({ movies, genres }: MoviesProps) {

    return (
        <>
            <ul className="p-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {
                    movies.map(movie => (
                        <MoviesListCard key={movie.id} movie={movie} genres={genres}/>
                    ))
                }
            </ul>
        </>

    );
}