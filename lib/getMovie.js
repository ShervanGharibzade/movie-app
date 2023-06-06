export default async function getMovie(userId) {
  const res = await fetch(`${process.env.BASE_URL}/${userId}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.json();

  return movie
}


