"use client";

import Link from "next/link";
import { useState } from "react";



export default function MovieCard({movies}) {
  const [loading, setLoading] = useState(false)
  const path = "https://image.tmdb.org/t/p/original"

  
  const content = movies?.map(mov => (
    <Link key={mov.id} href={`/movie/${mov.id}`}>
      <div className="w-fit relative">
          <div className="w-[230px] h-[300px] relative rounded-md drop-shadow-4xl cursor-pointer group overflow-hidden">
              <img
              className="w-[230px] h-[300px] scale-100 object-fill group-hover:scale-105 duration-500 "
              src={`${path}${mov.poster_path}`}
              onLoad={()=>setLoading(true)}
              />
              {!loading && <h2 className="text-4xl">loading...</h2>}
          </div>
          <div className="text-white px-2 absolute bottom-0 w-full bg-black/50">
              <h2 className="font-medium">
                  Popularity: {String(mov.popularity).slice(0,4)}
              </h2>
              <span className="text-xs italic">
                  Release: {mov.release_date.slice(0,4)}
              </span> 
          </div>
      </div>
    </Link>
  ));

  return ( 
      <div className='grid mt-10 grid-cols-4 w-fit mx-auto        justify-center items-center gap-5'>
        {content}
      </div>
    )
}
