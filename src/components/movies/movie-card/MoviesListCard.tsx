import Link from 'next/link';
import {IGenre} from "@/src/models/genre/IGenre";
import {IMovieShort} from "@/src/models/movie/IMovie";
import PosterPreview from "@/src/components/movies/movie-card/PosterPreview";
import MovieInfo from "@/src/components/movies/movie-card/MovieInfo";
import StarsRating from "@/src/components/movies/StarsRating";

type MovieProps = {
    movie: IMovieShort;
    genres: IGenre[];
}

export default function MoviesListCard({ movie, genres }: MovieProps) {
    return (
        <li className="pb-2 flex flex-col gap-2 bg-brand-gray rounded-md shadow-md transition hover:scale-102 hover:shadow-xl">
            <Link href={`/movie/${movie.id.toString()}`}>
                <PosterPreview movie={movie}/>
                <MovieInfo movie={movie} genres={genres}/>
                <StarsRating rating={movie.vote_average} votes={movie.vote_count}/>
            </Link>
        </li>
    );
}
