import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


let initialState = {
    movie: [],
    genre: [],
    pages: 1,
    total_pages: 0,
    searchText: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {...state, movie: [...action.payload.results]}
        case "SEARCH_MOVIES":
            return {...state, movie: [...action.payload.results]}
        case "GET_GENRES":
            return {...state, genre: [...action.payload]}
        case "GET_PAGES":
            return {...state, pages: action.payload}
        case "TOTAL_PAGES":
            return {...state, total_pages: action.payload}
        default:
            return state
    }
}

let store = createStore(reducer)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
