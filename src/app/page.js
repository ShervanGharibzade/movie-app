import getPopularMoveis from "../../lib/getPopularMoveis";
import Hero from '@/components/Hero';
import MovieList from '../components/MovieList'


export default async function Home() {
  const movies = await getPopularMoveis();

  return (
    <main>
      <Hero movies={movies.results}/>
      <MovieList movies={movies.results}/>
    </main>
  )
}
