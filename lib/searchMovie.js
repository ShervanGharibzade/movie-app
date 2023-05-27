export default async function searchMovie(name) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmMxNDkwYjg3Yjc4NWRhYjZiZTk4MjkxZTM5ZWM2OCIsInN1YiI6IjYzZjdjODUwZDFjYTJhMDA4ZWI2NzBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.phfjtS89SezMGZseKFu8mmfodK4tOoXeuYQA5LKe2Hs'
        }
      };

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,options)
    const movie = await res.json()

    return movie
}
