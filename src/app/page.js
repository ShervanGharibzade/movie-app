import MovieCard from "@/components/MovieCard";
import getPopularMoveis from "../../lib/getPopularMoveis";
import Hero from '@/components/Hero';


export default async function Home() {
  const movies = await getPopularMoveis();

  return (
    <main>
      <Hero movies={movies.results}/>
      <MovieCard movies={movies.results}/>
    </main>
  )
}
