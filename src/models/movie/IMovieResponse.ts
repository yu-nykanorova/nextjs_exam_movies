import {IMovieShort} from "@/src/models/movie/IMovie";

export interface IMovieResponse {
    page: number;
    results: IMovieShort[];
    total_pages: number;
    total_results: number;
}