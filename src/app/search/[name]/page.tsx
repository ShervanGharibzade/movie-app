import React from "react";
import searchMovie from "../../../../lib/get-movie-by-name";
import Image from "next/image";

export default async function page({ params: { name } }: any) {
  const data = name && (await searchMovie(name));
  const path = "https://image.tmdb.org/t/p/w1280";

  //   {
  //     adult: false,
  //     backdrop_path: '/9BtUWZhigispqSUYhrS6cJHpvwx.jpg',
  //     genre_ids: [Array],
  //     id: 14919,
  //     original_language: 'en',
  //     original_title: 'Batman: Mask of the Phantasm',
  //     overview: "When a powerful criminal, who is connected to Bruce Wayne's ex-girlfriend, blames the Dark Knight for killing a crime lord, Batman decides to fight against him.",
  //     popularity: 25.143,
  //     poster_path: '/l4jaQjkgznu2Rz05X18f24UjPNW.jpg',
  //     release_date: '1993-12-25',
  //     title: 'Batman: Mask of the Phantasm',
  //     video: false,
  //     vote_average: 7.475,
  //     vote_count: 1010
  //   }

  return (
    <section>
      <div className="grid grid-cols-4 gap-5 justify-center items-center py-20">
        {data?.results.map((i: any) => (
          <div key={i.id} className="w-[250px] h-[600px]  rounded-2xl relative">
            <Image
              className=" rounded-lg absolute top-0 blur-xl left-0"
              src={`${path}${i?.poster_path}`}
              alt=""
              width={250}
              height={200}
            />
            <Image
              className=" rounded-lg relative"
              src={`${path}${i?.poster_path}`}
              alt=""
              width={250}
              height={200}
            />
            <div className="flex justify-between text-yellow-500 font-bold">
              <h2>{i?.vote_average?.toFixed(1)}</h2>
              <h2>{i?.release_date?.split("-")[0]}</h2>
            </div>
            <h2 className="text-center font-semibold text-xl py-5">
              {i.title.length > 20 ? i?.title?.slice(0, 20) + "..." : i.title}
            </h2>
            <p className="text-center">{i?.overview?.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </section>
  );
}
