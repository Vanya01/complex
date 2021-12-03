import axios from 'axios';

const API_KEY = '09569995109a57a2e8c35b35923c769b';
const SEARCH = async ({searchText}) => await axios.get(`https://api.themoviedb.org/3/search/?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`);
let instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTU2OTk5NTEwOWE1N2EyZThjMzViMzU5MjNjNzY5YiIsInN1YiI6IjYxMmY0NzlhMmNlZmMyMDA0M2EzZGI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OoAhYiLeYTkFJyn9p8zAv5qALUxKmK45Ctc4eD7ahJI'
    }
})

const getMovies = async (pages) => await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`);
const getGenres = async () => await instance.get(`genre/movie/list`);


export {getMovies, getGenres, API_KEY,SEARCH};
