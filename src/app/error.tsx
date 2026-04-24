"use client";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}){
    return (
        <div className="mt-10 text-red-400 text-center">
            <h2 className="text-[20px]">Fetching fail</h2>
            <p className="text-[18px]">Error: {error.message}</p>
            <button className="mt-6 px-6 py-1 bg-brand-white text-red-700 rounded-md cursor-pointer" onClick={() => reset()}>Try again</button>
        </div>
    );
};
