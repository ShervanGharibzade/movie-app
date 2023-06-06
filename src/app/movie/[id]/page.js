import getMovie from '../../../../lib/getMovie';
import getPopularMoveis from '../../../../lib/getPopularMoveis';
import MovieDetail from './components/MovieDetail';


export async function generateStaticParams() {

    const movies = await getPopularMoveis();

    return movies?.results?.map(mov => ({
        userId: mov?.id?.toString()
    }))
    
}

export default async function page({params:{id}}) {
    let userId = id
    const movieDetails = await getMovie(String(userId))
  return (
    <div className='py-4'>
        <MovieDetail movie={movieDetails}/>
    </div>
    )
}

