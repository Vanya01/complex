import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './poster_preview.css';

function PosterPreview(props) {
    let {match: {params: {id}}} = props;

    let movie = useSelector(({movie}) => movie);
    const movieId = movie.filter(value => id.indexOf(value.id) !== -1)

    console.log(movie)
    return (
        <div className={'wrap_poster_preview'}>
            {
                movieId.map(value => {
                    return (
                        <div key={value.id} className={'wrap_about container'}>
                            <Link to={'/home'}>
                                Move back
                            </Link>
                            <div className={'aboutInfo'}>
                                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt=""/>
                            </div>
                            <div className={'title'}>
                                <h3>{value.title}</h3>
                                <p> Release: {value.release_date}</p>
                            </div>
                            <div className={'overview'}>
                                <p>{value.overview}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export {PosterPreview};
