import {FC} from "react";
import {IMovieShort} from "@/src/models/movie/IMovie";
import {MoviesListCard} from "@/src/components/movies/movie-card/MoviesListCard";

type MoviesProps = {
    movies: IMovieShort[];
}

export const MoviesList: FC<MoviesProps> = ({movies}) => {
    return (
        <>
            <ul className="p-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                {
                    movies.map(movie => (
                        <MoviesListCard key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </>
    );
};
