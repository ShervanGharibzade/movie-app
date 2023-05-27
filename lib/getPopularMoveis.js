export default async function getPopularMoveis() {
  const res = await fetch(`${process.env.BASE_URL}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,{cache:"default"});
  const movies = await res.json();

  return movies
}
