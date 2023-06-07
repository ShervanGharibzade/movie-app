
import getMovie from '../../../../lib/getMovie';
import MovieDetail from './components/MovieDetail';
import { Suspense } from 'react';


export default async function page({params:{id}}) {
    const movieId = id
    let movieDetails;
    if(movieId) movieDetails = await getMovie(id);
    
    
    console.log(movieId,'mooooooooooooovi')
    return (
        <div className='py-4 text-white'>
            <Suspense fallback={<h2>loading ...</h2>}>
                <MovieDetail movie={movieDetails}/>
            </Suspense>
        </div>
    )
}
