export const GET_MOVIES = 'GET_MOVIE';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVOURITE = 'ADD_MOVIE_FAVOURITE';
export const REMOVE_MOVIE_FAVOURITE = 'REMOVE_MOVIE_FAVOURITE';
// import axios from 'axios';


export function getMovies (title) {
    return dispatch => {
        fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
        .then(r => r.json())
        .then(data => dispatch({
            type: GET_MOVIES,
            payload: data
        }))
    }
}

export function getMovieDetail(id) {
    return dispatch => {
        fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
        .then(r => r.json())
        .then(data => dispatch({
            type: GET_MOVIE_DETAIL,
            payload: data
        }))
    }
}

export function addMovieFavourite(movie) {
    return {
        type: ADD_MOVIE_FAVOURITE,
        payload: movie
    }
}

export function removeMovieFavourite(id) {
    return {
        type: REMOVE_MOVIE_FAVOURITE,
        payload: id
    }
}

