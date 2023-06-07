
import getMovie from '../../../../lib/getMovie';
import getPopularMoveis from '../../../../lib/getPopularMoveis';
import MovieDetail from './components/MovieDetail';
import { Suspense } from 'react';


export default async function page({params:{id}}) {
    
    const movieDetails = await getMovie(id);
    
    
    console.log(id,'mooooooooooooovi')
    return (
        <div className='py-4 text-white'>
            <Suspense fallback={<h2>loading ...</h2>}>
                <MovieDetail movie={movieDetails}/>
            </Suspense>
        </div>
    )
}


export async function generateStaticParams () {
    const popularMovies = await getPopularMoveis();
    const movies = await popularMovies;
    
    return movies.results.map(
        movie =>({
            id: movie.id.toString()
        })
    )
}