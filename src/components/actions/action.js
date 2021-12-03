import {Route} from 'react-router-dom';
import {PosterPreview} from '../poster_preview/poster_preview';

function Card(props) {
    let {match: {url}} = props

    return (
        <div className={'wrap_next_page'}>
            <Route path={`${url}/:id`} render={(props) => {
                return <PosterPreview {...props}/>
            }
            }/>
        </div>
    )
}

export {Card};
