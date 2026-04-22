import {FC} from "react";
import {IMovieShort} from "@/src/models/movie/IMovie";
import Link from "next/dist/client/link";
import {PosterPreview} from "@/src/components/movies/movie-card/PosterPreview";
import {MovieInfo} from "@/src/components/movies/movie-card/MovieInfo";
import {StarsRating} from "@/src/components/movies/StarsRating";

type MovieProps = {
    movie: IMovieShort;
}

export const MoviesListCard: FC<MovieProps> = ({movie}) => {
    return (
        <li className="pb-2 flex flex-col gap-2 bg-brand-gray rounded-md shadow-md transition hover:scale-102 hover:shadow-xl">
            <Link href={{pathname: `movie/${movie.id.toString()}`, query:{data: JSON.stringify(movie)}}}>
                <PosterPreview movie={movie}/>
                <MovieInfo movie={movie}/>
                <StarsRating rating={movie.vote_average} votes={movie.vote_count}/>
            </Link>
        </li>
    );
};
