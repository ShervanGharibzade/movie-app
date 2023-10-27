import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  const content = movies?.map((mov) => <MovieCard key={mov.id} mov={mov} />);

  return (
    <div className="grid my-10 grid-cols-4 gap-10 w-fit mx-auto justify-center items-center">
      {content}
    </div>
  );
}
