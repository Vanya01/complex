import location from '../imgs/location.png';
import Stars from '../stars/stars';
import fb from '../imgs/Facebook.png';
import './movie_card.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getGenres, getMovies} from '../services/movie_service';
import {GenresFunction} from '../genre_badge/genre';
import {Link} from 'react-router-dom';
import {Pagination} from '@material-ui/lab';
import {Badge} from '@material-ui/core';

export function MoviesInfo() {
    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let movies = state.movie
    let pages = state.pages
    let totalPages = state.total_pages
    console.log(totalPages)


    useEffect(() => {
        getMovies(pages).then(value => {
            dispatch(
                {type: 'FETCH_MOVIES', payload: (value.data)})
            dispatch(
                {type: 'TOTAL_PAGES', payload: (value.data.total_pages)})
        })
        getGenres().then(value => dispatch(
            {
                type: 'GET_GENRES', payload: (value.data.genres)
            }))
    }, [pages])


    let handleChange = (event, value) => {
        dispatch({type: 'GET_PAGES', payload: (value)});
    }

    return (
        <>
            <div className={'out_wrap_card d-flex container'}>
                {
                    movies && movies.map(value =>
                        <div key={value.id} className={'wrapper'}>
                            <div className={'wrap_cards'}>
                                <Link to={`/about/${value.id}`}>
                                    <div className={'img_card'}>
                                        <Badge badgeContent={value.vote_average}
                                               color={value.vote_average > 7 ? 'primary' : 'secondary'}/>
                                        <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="Poster"/>
                                    </div>

                                </Link>
                                <div className="wrap_one">
                                    <div className="wrap_text">
                                        <h3>{value.title}</h3>
                                    </div>
                                    <div className={'wrap_genres d-flex'}>
                                        <GenresFunction genresId={value.genre_ids}/>
                                        <img src={location} alt="location"/>
                                    </div>
                                    <div className="wrap_text">
                                        <p>{value.overview}</p>
                                    </div>
                                    <hr className={'hr'}/>
                                    <div className={'stars_and_fb d-flex'}>
                                        <Stars/>
                                        <img src={fb} alt="fb"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={'pagination'}>
                <Pagination count={totalPages} color="secondary" onChange={handleChange}/>
            </div>
        </>
    )
}
