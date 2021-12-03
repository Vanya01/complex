import React, {useState} from "react";
import {MoviesInfo} from "../movie_card/movie_card";

export default function Searchvalue() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const empty = {};
    console.log(empty);

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(event.target.value)

        fetch(`https://api.themoviedb.org/3/search/?api_key=09569995109a57a2e8c35b35923c769b&language=en-US&query=${event.target.value}&page=1&include_adult=false`)
            .then((res) => res.json())
            .then((data) => {
                setResults(data.results)
            })
        console.log('it works search', empty)
    }

    return (
        <div>
            <div className={'wrap-input'}>
                <input type="text" value={query} placeholder="Search" onChange={handleSubmit}/>
            </div>

            <div>
                {results && results.length > 0 && (
                    <ul className="results">
                        {results.map((movie) => (
                            <li key={movie.id}>
                                <MoviesInfo movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
