// import {IGenre} from "@/src/models/genre/IGenre";
// import {IMovieShort} from "@/src/models/movie/IMovie";
//
// type MovieInfoProps = {
//     movie: IMovieShort;
//     genres: IGenre[];
// };
//
// export default function MoviesListCard({ movie, genres }: MovieInfoProps) {
//
//     const movieGenres = genres.filter(genre => movie.genre_ids?.includes(genre.id));
//
//     const shortOverview = movie.overview
//         ? movie.overview.split(" ").slice(0, 10).join(" ")
//         : "No overview";
//
//     return (
//         <div className="p-2 grid grid-rows-[50px_50px_50px] gap-2 sm:grid-rows-[50px_70px_80px]">
//             <h3 className="text-[18px] text-brand-light-blue leading-7 sm:text-[22px]">{movie.title ?? "No title"}</h3>
//             <div className="flex items-center gap-2 flex-wrap self-start">
//                 {
//                     movieGenres.map(genre => (
//                         <GenreBadge
//                             key={genre.id}
//                             genre={genre}
//                             className="px-1 text-[14px] text-brand-black bg-brand-light-gray rounded-md"
//                         />
//                     )).slice(0, 5)
//                 }
//                 {
//                     movieGenres.length > 5 ? <span> ...</span> : ""
//                 }
//             </div>
//             <p className="text-[14px] sm:text-md">{shortOverview} ...</p>
//         </div>
//     );
// };