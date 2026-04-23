import {StarsRating} from "@/src/components/movies/StarsRating";
import {IMovieShort} from "@/src/models/movie/IMovie";
import {FC} from "react";
import {getPosterUrl} from "@/src/utils/getPosterUrl";
import Link from "next/dist/client/link";
import Image from "next/image";

type MainPosterProps = {
    movie: IMovieShort | null;
}

export const MainPoster: FC<MainPosterProps> = ({movie}) => {

    if (!movie) return null;

    return (
        <>
            <div className="h-70 relative sm:h-100">
                <div className="h-full">
                    <Image
                        src={getPosterUrl(movie.backdrop_path, 780)}
                        alt={movie.title}
                        fill
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                <div className="w-full p-2 absolute bottom-2 bg-black/60 sm:p-4 lg:w-3/4 lg:left-2 lg:rounded-md">
                    <Link href={{pathname: `movie/${movie.id.toString()}`, query:{data: JSON.stringify(movie)}}}>
                        <h2 className="mb-1 text-brand-light-blue text-[22px] leading-10 transition hover:text-brand-white sm:mb-4 sm:text-[32px]">{movie.title}</h2>
                    </Link>
                    <StarsRating rating={movie.vote_average} votes={movie.vote_count}/>
                </div>
            </div>
        </>
    );
};
