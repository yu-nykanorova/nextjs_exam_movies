const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (path: string | null, size: number) => {
    if (!path) {
        return "/images/no_photo.jpg";
    }
    return `${BASE_IMAGE_URL}/w${size}${path}`;
};