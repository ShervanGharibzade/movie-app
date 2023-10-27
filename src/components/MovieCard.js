import Link from "next/link";

export default function MovieCard({ mov }) {
  const path = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Link href={`/movie/${mov.id}`}>
        <div className="w-fit relative border-2 border-white/50 rounded-lg">
          <div className="w-[230px] h-[300px] relative rounded-md drop-shadow-4xl cursor-pointer group overflow-hidden">
            <img
              className="w-[230px] h-[300px] scale-100 object-fill group-hover:scale-105 duration-500 "
              src={`${path}${mov.poster_path}`}
              alt="photo"
            />
          </div>
          <div className="text-white px-2 absolute bottom-0 w-full bg-black/50">
            <h2 className="font-medium">
              Popularity: {String(mov.vote_average).slice(0, 4)}
            </h2>
            <span className="text-xs italic">
              Release: {mov.release_date.slice(0, 4)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
