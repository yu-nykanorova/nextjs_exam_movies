import {IGenre} from "@/src/models/genre/IGenre";

type GenreBadgeProps = {
    genre: IGenre,
    className?: string,
    onClick?: () => void,
}

export default function GenreBadge({ genre, className, onClick }: GenreBadgeProps){

    if (!genre) return null;

    return (
        <button
            type="button"
            className={`flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            {genre.name}
        </button>
    );
};