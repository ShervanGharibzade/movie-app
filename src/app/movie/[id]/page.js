
import getMovie from '../../../../lib/getMovie';
import MovieDetail from './components/MovieDetail';
export default async function page(props) {
    const id = props.params.id
    const movieDetails = await getMovie(id)
    return (
        <div className='py-4 text-white'>
        <MovieDetail movie={movieDetails}/>
        </div>
    )
}
