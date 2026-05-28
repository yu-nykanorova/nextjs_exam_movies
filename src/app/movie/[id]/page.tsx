import {moviesService} from "@/src/services/movies.service";
import {Metadata} from "next";
import Image from "next/image";
import {getPosterUrl} from "@/src/utils/getPosterUrl";
import StarsRating from "@/src/components/movies/StarsRating";
import GenreBadge from "@/src/components/genres/GenreBadge";

type Props = {
    params: Promise<{id: string}>;
}

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
    const {id} = await params;
    const movie = await moviesService.getMovieById(id);

    return {
        title: movie.title,
    };
};

export default async function MoviePage ({params}: Props){

    const { id } = await params;
    const movie = await moviesService.getMovieById(id);

    return (
        <>
            <div>
                <div className="h-70 relative sm:h-100">
                    <div className="w-full h-full relative">
                        <Image
                            src={getPosterUrl(movie.backdrop_path, 780)}
                            alt={movie.title}
                            fill
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute w-full right-0 left-0 bottom-0 p-1 flex flex-col justify-center items-end gap-2 bg-black/40 md:p-6 md:w-2/5 md:top-0 md:left-[initial] md:gap-6">
                        <StarsRating className="flex flex-col items-end" rating={movie.vote_average} votes={movie.vote_count}/>
                        <div className="flex flex-col items-end text-xs md:gap-1 md:text-[16px]">
                            {
                                movie.genres.map((genre) => (
                                    <GenreBadge key={genre.id} genre={genre}/>
                                ))
                            }
                        </div>
                        <h1 className="text-[26px] text-brand-light-blue text-right leading-10 sm:text-[32px] md:text-[36px]">{movie.title}</h1>
                    </div>
                </div>
                <div className="h-[calc(100vh-400px)] bg-brand-gray">
                    <div className="p-2 bg-brand-light-gray md:p-4">
                        <h2 className="text-brand-black">Original title: <span
                            className="text-brand-gray text-[16px] font-semibold md:text-[22px]">{movie.title}</span></h2>
                        <p className="text-brand-gray text-[12px] md:text-[14px]">Original language: {movie.original_language}</p>
                    </div>
                    <div className="p-2 flex flex-col-reverse justify-between gap-8 bg-brand-gray md:flex-row-reverse md:p-4">
                        <div>
                            {
                                movie.production_companies.length
                                    ? <>
                                        <p className="mb-4 text-[20px]">Production companies:</p>
                                        <ul>
                                            {
                                                movie.production_companies.map((company) => (
                                                    <li key={company.id} className="mb-2 flex items-center  justify-between gap-2 border-b border-b-brand-white">
                                                        <h3 className="text-[16px] text-brand-light-blue">{company.name} ({company.origin_country})</h3>
                                                        <div className="w-10 h-10 mb-2 p-0.5 flex items-center bg-white/80 rounded-sm">
                                                            {
                                                                company.logo_path
                                                                ?
                                                                <Image
                                                                    src={getPosterUrl(company.logo_path, 200)}
                                                                    alt={`${company.name} logo`}
                                                                    width={40}
                                                                    height={40}
                                                                    className={"h-full object-cover"}
                                                                />
                                                                :
                                                                <p className="h-full text-[10px] text-center text-red-900 font-semibold border border-red-900 rounded-sm">No image</p>
                                                            }
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </>
                                    : null
                            }

                        </div>
                        <div className="flex-[0_0_60%]">
                            <p className="mb-4 text-[20px]">Overview:</p>
                            <div className="mb-4 text-sm leading-6">{movie.overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

