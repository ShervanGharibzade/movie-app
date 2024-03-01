import MySwiperComponent from "../components/swiper-slider";

export default async function HomeHeader({ movies, path }: any) {
  return (
    <section>
      <div className="py-4">
        <h2 className="text-center font-bold text-4xl py-3">Movie App</h2>
        <MySwiperComponent movies={movies} path={path} />
      </div>
    </section>
  );
}
