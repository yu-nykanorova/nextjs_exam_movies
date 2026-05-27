import MoviesListCard from './movie-card/MoviesListCard';
import {IGenre} from "@/src/models/genre/IGenre";
import {moviesService} from "@/src/services/movies.service";
import Pagination from "@/src/components/pagination/Pagination";

type MoviesProps = {
    page: number;
    genres: IGenre[];
    selectedGenres: number[];
    searchQuery: string;
}

export default async function MoviesList({ page, genres, searchQuery, selectedGenres }: MoviesProps) {

    const moviesData = searchQuery
        ? await moviesService.searchMovies({page: page, query: searchQuery})
        : await moviesService.getMovies({ page: page, genresIds: selectedGenres});

    const moviesToShow = moviesData.movies;
    const totalPages = moviesData.totalPages;

    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    moviesToShow.map(movie => (
                        <MoviesListCard key={movie.id} movie={movie} genres={genres}/>
                    ))
                }
            </ul>
            <Pagination currentPage={Number(page)} totalPages={totalPages} />
        </>

    );
}