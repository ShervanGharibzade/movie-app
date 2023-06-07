import Link from "next/link";
import searchMovie from "../../../../lib/searchMovie";

export default async function page({params:{name}}) {

  const path = "https://image.tmdb.org/t/p/original"
    let movieName = name.replace(".txt","");
    let movie;
    if(Boolean(String(movieName))){
       movie = await searchMovie(movieName);
    }
    let content;
    if(movie.total_results !== 0){
      content = movie?.results?.map(mov => (
        <div key={mov.id} className="w-[300px] mx-auto">
          <div className="group rounded-xl w-[300px] h-[400px] overflow-hidden">
          <img
          className="w-[300px] h-[400px] scale-100 object-fill group-hover:scale-105 duration-500"
          src={`${path}${mov.poster_path}`}
          alt={mov.title}
          />
          </div>
          <p className="text-sm py-3">{mov.overview.slice(0,150)}...</p>
          <h2 className="text-zinc-400 text-sm italic">
              Release: {mov.release_date}
              <span className="pl-5">
                popularity: {mov.popularity}
              </span>
          </h2>
        </div>
      ))
    }else{
      content = <h2 className="text-3xl top-2/4 translate-y-1/4 absolute left-2/4 -translate-x-2/4 font-bold ">Not Found Result</h2>;
    }
     

    return (
      <div className="text-white my-6 items-center text-center w-full">
        <div className="w-full gap-5 items-center py-4">
            <Link href={"/"}>
              <button className="bg-blue-600 my-4 w-20 h-20 fixed right-20 bottom-20 animate-bounce font-semibold rounded-full hover:ring-4 hover:bg-blue-800 duration-200 ring-blue-400">
              Back to Home
              </button>
            </Link>
          <h2 className="font-semibold text-3xl">Results for : {movieName}
          </h2>
        </div>
        <div className="grid text-center gap-10 min-h-[83.5vh] grid-cols-4 w-fit mx-auto">
          {content}
        </div>
      </div>
    )
  }
  