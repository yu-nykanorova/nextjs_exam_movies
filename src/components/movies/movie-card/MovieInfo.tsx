import {FC} from "react";
import {IMovieShort} from "@/src/models/movie/IMovie";
import {moviesService} from "@/src/services/movies.service";
import {IGenre} from "@/src/models/genre/IGenre";
import {GenreBadge} from "@/src/components/genres/GenreBadge";

type MovieInfoProps = {
    movie: IMovieShort;
}

export const MovieInfo: FC<MovieInfoProps> = async ({movie}) => {
    const allGenres = await moviesService.getGenres();
    const movieGenres: IGenre[] = allGenres.filter(genre => movie.genre_ids.includes(genre.id));

    const shortOverview = movie.overview.split(" ").slice(0, 10).join(" ");

    return (
        <div className="p-2 grid grid-rows-[50px_50px_50px] gap-2 sm:grid-rows-[50px_70px_80px]">
            <h3 className="text-[18px] text-brand-light-blue leading-7 sm:text-[22px]">{movie.title}</h3>
            <div className="flex items-center gap-2 flex-wrap self-start">
                {
                    movieGenres.map(genre => (
                        <GenreBadge
                            key={genre.id}
                            genre={genre}
                            className="px-1 text-[14px] text-brand-black bg-brand-light-gray rounded-md"
                        />
                    )).slice(0, 5)
                }
                {
                    movieGenres.length > 5 ? <span> ...</span> : ""
                }
            </div>
            <p className="text-[14px] sm:text-md">{shortOverview} ...</p>
        </div>
    );
};
