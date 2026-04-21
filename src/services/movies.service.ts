import {IMovieShort} from "@/src/models/movie/IMovie";
import {IMovieResponse} from "@/src/models/movie/IMovieResponse";
import {getItems} from "@/src/services/api.service";

type GetMovieParams = {
    genresIds?: number[];
    page?: number;
}

type MoviesResult = {
    movies: IMovieShort[];
    totalPages: number;
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
    }
}