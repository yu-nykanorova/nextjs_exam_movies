"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {searchValidator} from "@/src/validators/search.validator";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {SearchIcon} from "@/src/components/icons/SearchIcon";
import {useEffect} from "react";

type SearchFormParams = {
    searchQuery: string;
}

export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("searchQuery") || "";

    const {
        handleSubmit,
        register,
        clearErrors,
        reset,
        formState: {errors},
    } = useForm<SearchFormParams>({
        mode: "onSubmit",
        resolver: joiResolver(searchValidator),
        defaultValues: {
            searchQuery,
        }
    });

    useEffect(() => {
        if (searchQuery) {
            reset({searchQuery: searchQuery});
        } else  {
            reset({ searchQuery: "" });
        }
    }, [searchQuery, reset]);

    const handleSearch = (data: SearchFormParams) => {
        const newParams = new URLSearchParams();

        //newParams.delete("genres")
        newParams.set("page", "1");
        newParams.set("searchQuery", data.searchQuery);

        router.push(`/?${newParams.toString()}`);
        //router.refresh();
    }

    return (
        <form
            className="h-8 flex items-center justify-between relative"
            onSubmit={handleSubmit(handleSearch)}
            noValidate
        >
            <input
                type="text"
                {...register("searchQuery")}
                onBlur={() => clearErrors("searchQuery")}
                className="w-40 h-full p-1 bg-brand-gray rounded-md sm:w-70"
            />
            {
                errors.searchQuery &&
                <div className="w-full p-0.5 absolute -bottom-full text-[14px] text-red-800 bg-white/90 rounded-md">
                    {errors.searchQuery?.message}
                </div>
            }
            <button type="submit" className="h-full p-1 absolute right-0 flex items-center justify-center cursor-pointer">
                <SearchIcon/>
            </button>
        </form>
    );
}