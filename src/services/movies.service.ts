import {IMovieDetails, IMovieShort} from "@/src/models/movie/IMovie";
import {IMovieResponse} from "@/src/models/movie/IMovieResponse";
import {getItems} from "@/src/services/api.service";
import {IGenre} from "@/src/models/genre/IGenre";
import {IGenreResponse} from "@/src/models/genre/IGenreResponse";

type GetMovieParams = {
    genresIds?: number[];
    page?: number;
}

type MoviesResult = {
    movies: IMovieShort[];
    totalPages: number;
}

export type SearchQueryParams = {
    query: string;
    page: number;
}

export const moviesService = {
    getMovies: async (params?: GetMovieParams): Promise<MoviesResult> => {
        const queryParams: {page?: number, with_genres?: string} = {};

        if (params?.page) {
            queryParams.page = params.page;
        }

        if (params?.genresIds?.length) {
            queryParams.with_genres = params.genresIds.join(",");
        }

        const response = await getItems<IMovieResponse>("/discover/movie", queryParams);

        return {
            movies: response.results,
            totalPages: response.total_pages,
        }
    },
    getMovieById: async (id: string): Promise<IMovieDetails> => {
        return await getItems<IMovieDetails>(`/movie/${id}`);
    },
    getGenres: async (): Promise<IGenre[]> => {
        const response = await getItems<IGenreResponse>("/genre/movie/list");
        return response.genres;
    },
    searchMovies: async (query: SearchQueryParams): Promise<MoviesResult> => {
        const response = await getItems<IMovieResponse>("/search/movie", query);
        return {
            movies: response.results,
            totalPages: response.total_pages,
        };
    }
};