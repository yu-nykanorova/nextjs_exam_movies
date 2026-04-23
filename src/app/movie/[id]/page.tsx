import {Metadata} from "next";
import {IMovieDetails} from "@/src/models/movie/IMovie";

type Props = {
    searchParams: IMovieDetails;
}

export const generateMetadata = async ({searchParams}: Props):Promise<Metadata> => {
    const {title} = await searchParams;

    return {
        title: `${title}`,
    }
}

export default async function MoviePage ({searchParams}: Props){

    const params = await searchParams;
    console.log(params);

    return (
        <>MoviePage</>
    );
};
