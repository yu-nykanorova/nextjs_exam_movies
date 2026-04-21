const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getItems = async <T, >(
    url: string,
    queryParams?: {page?: number; with_genres?: string}
): Promise<T> => {
    const params = new URLSearchParams({
        page: queryParams?.page?.toString() || "1",
    });

    if (queryParams?.with_genres) {
        params.append("with_genres", queryParams.with_genres);
    }

    const result = await fetch(`${BASE_URL}${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TMDB_TOKEN}`,
        }
    });

    if (!result.ok) {
        throw new Error("Failed to fetch movies");
    }

    return await result.json();
};