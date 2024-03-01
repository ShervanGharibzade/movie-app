import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GalleryCard({ movies, path }: any) {
  return (
    <>
      {movies
        ? movies.map((mov: any) => (
            <Link
              href={`/movie/${mov?.id}`}
              key={mov?.id}
              className="relative w-fit group">
              <Image
                loading="lazy"
                width={200}
                height={100}
                className=" rounded-lg duration-200 cursor-pointer"
                src={`${path}${mov?.poster_path}`}
                alt="movie cover"
              />
              <div className="text-center opacity-0 group-hover:opacity-100 bg-black/70 absolute top-1/2 duration-200 w-full h-full -translate-y-1/2  items-center grid justify-center cursor-pointer font-bold text-yellow-500">
                <h2>{mov?.title?.toUpperCase()}</h2>
                <h2 className="border-2 border-yellow-500 rounded-lg w-fit mx-auto px-2 py-2 bg-black">
                  {mov?.vote_average?.toFixed(1)}
                </h2>
                <h2>{mov?.release_date?.split("-")[0]}</h2>
              </div>
            </Link>
          ))
        : "no movie for show"}
    </>
  );
}
