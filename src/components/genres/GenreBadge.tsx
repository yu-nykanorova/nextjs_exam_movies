import {FC} from "react";
import {IGenre} from "@/src/models/genre/IGenre";

type GenreBadgeProps = {
    genre: IGenre,
    className?: string,
    onClick?: () => void,
}

export const GenreBadge: FC<GenreBadgeProps> = ({genre, className, onClick}) => {

    if (!genre) return null;

    return (
        <div
            className={`flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            {genre.name}
        </div>
    );
};