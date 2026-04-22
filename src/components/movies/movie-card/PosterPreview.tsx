import {FC} from "react";
import {IMovieShort} from "@/src/models/movie/IMovie";
import {getPosterUrl} from "@/src/utils/getPosterUrl";
import Image from "next/image";

type PosterPreviewProps = {
    movie: IMovieShort;
}

export const PosterPreview: FC<PosterPreviewProps> = ({movie}) => {
    return (
        <div className="h-60 rounded-t-md sm:h-70">
            <Image
                src={getPosterUrl(movie.poster_path, 500)}
                alt={movie.title}
                width={240}
                height={240}
                className="w-full h-full object-cover object-top rounded-t-md"
            />
        </div>
    );
};
