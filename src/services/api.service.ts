const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getItems = async <T, >(
    url: string,
    queryParams?: Record<string, string | number | undefined>,
): Promise<T> => {
    const params = new URLSearchParams();

    if (queryParams) {
        Object.entries(queryParams).forEach(([key, value]) => {
            if (value !== undefined) {
                params.append(key, String(value));
            }
        });
    }

    const result = await fetch(`${BASE_URL}${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TMDB_TOKEN}`,
        },
        cache: "no-store",
    });

    if (!result.ok) {
        throw new Error("Failed to fetch movies");
    }

    return await result.json();
};