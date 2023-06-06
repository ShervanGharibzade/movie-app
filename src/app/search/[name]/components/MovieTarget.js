import React from 'react'

export default function MovieTarget({movie}) {
    const path = "https://image.tmdb.org/t/p/original"
    let movieTarget;
    if(movie.total_results !== 0){
        movieTarget = movie
    }
  return (
    <div className="w-[300px] mx-auto">
          <div className="group rounded-xl w-[300px] h-[400px] overflow-hidden">
          <img
          className="w-[300px] h-[400px] scale-100 object-fill group-hover:scale-105 duration-500"
          src={`${path}${movieTarget.poster_path}`}
          alt={movieTarget.title}
          />
          </div>
          <p className="text-sm py-3">{movieTarget.overview}...</p>
          <h2 className="text-zinc-400 text-sm italic">
              Release: {movieTarget.release_date}
              <span className="pl-5">
                popularity: {movieTarget.popularity}
              </span>
          </h2>
        </div>
  )
}
