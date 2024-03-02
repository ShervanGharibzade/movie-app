import getPopularMovies from "../../lib/get-popular-movies";
import Gallery from "./sections/gallery";
import HomeHeader from "./sections/home-header";
import Searchbar from "./sections/searchbar";

export default async function Home() {
  const { results } = await getPopularMovies();

  const path = "https://image.tmdb.org/t/p/w1280";

  const movies = results.map((mov: any) => mov);
  return (
    <section className="overflow-hidden">
      <Searchbar />
      <HomeHeader movies={movies} path={path} />
      <Gallery movies={movies} path={path} />
    </section>
  );
}
