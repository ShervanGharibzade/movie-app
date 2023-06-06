import Link from "next/link";


export default function page({movie}) {
  const path = "https://image.tmdb.org/t/p/original";
  
    const content =(
      <>
      <img
      className="rounded-xl w-[400px] my-5"
      src={`${path}${movie.poster_path}`}
      alt={movie.title}
      />
        <h2 className="font-bold text-4xl">{movie.original_title}</h2>
        <h3 className="text-zinc-400 text-lg">Genre: {movie.genres[1].name}</h3>
        <p>{movie.overview}</p>
        <span>Popularity: {String(movie.popularity).slice(0,4)}</span>
      </>
    )

  return (
    
    <div className="text-white flex flex-col w-2/3 mx-auto text-center justify-center items-center">
      <button className="bg-blue-600 my-4 w-20 h-20 fixed right-20 bottom-20 animate-bounce font-semibold rounded-full hover:ring-4 hover:bg-blue-800 duration-200 ring-blue-400">
            <Link href={"/"}>Home</Link>
      </button>
      {content}
    </div>
  )
}
