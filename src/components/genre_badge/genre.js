import {useSelector} from 'react-redux';

function GenresFunction({genresId}) {
    let genres = useSelector(({genre}) => genre);
    const genresIds = genresId.join(',')
    const genresName = genres.filter(value => genresIds.indexOf(value.id) !== -1)

    return (
        <div className={'wrap_type'}>
            {
                genresName.map(value => <div key={value.id} className={'wrap_genre'}> {value.name}</div>)
            }
        </div>)
}

export {GenresFunction};
