import React from "react";
import getMovieById from "../../../../lib/get-movie-id";
import Image from "next/image";

export default async function page({ params: { id } }: any) {
  const path = "https://image.tmdb.org/t/p/original";
  const movieDetails = await getMovieById(id);

  return (
    <section className="h-screen py-16">
      <div className="flex justify-center w-full gap-5">
        <Image
          width={400}
          height={8000}
          src={`${path}${movieDetails?.poster_path}`}
          alt={`${movieDetails?.title} poster`}
        />
        <div className="flex-1">
          <p className="text-4xl flex items-center">
            <h2>{movieDetails?.title}</h2>
            <div className="mx-3 border-b-2 border-yellow-500 flex-1"></div>
            <span className="mx-2 text-2xl text-yellow-500">
              {movieDetails?.vote_average?.toFixed(1)}
            </span>
          </p>
          <p className="py-5">{movieDetails?.overview}</p>
          <p className="flex gap-5">
            Genres:{" "}
            {movieDetails.genres.map((genre: any, index: number) => (
              <>
                {index > 0 && ","}
                {genre.name}
              </>
            ))}
          </p>
          <h4>{movieDetails?.release_date}</h4>
        </div>
      </div>
    </section>
  );
}
