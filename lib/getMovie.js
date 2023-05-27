export default async function getMovie(userId) {
  const res = await fetch(`${process.env.BASE_URL}/${userId}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.json();

  return movie
}


// https://api.themoviedb.org/3/movie/882569?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1