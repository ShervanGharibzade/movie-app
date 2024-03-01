export default async function getMovieById(userId: any) {
  const res = await fetch(
    `${process.env.BASE_URL}/${userId}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } }
  );
  const movie = res.json();

  return movie;
}
