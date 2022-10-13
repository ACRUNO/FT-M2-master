import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVOURITE, REMOVE_MOVIE_FAVOURITE } from '../actions';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_MOVIES:
            return { ...state, moviesLoaded: action.payload.Search }
        case GET_MOVIE_DETAIL:
            return { ...state, movieDetail: action.payload }
        case ADD_MOVIE_FAVOURITE: 
            return { ...state, moviesFavourites: state.moviesFavourites.concat(action.payload) }
        case REMOVE_MOVIE_FAVOURITE:
            return { ...state, moviesFavourites: state.moviesFavourites.filter(array => array.id !== action.payload) }
        default: return { ...state } 
    }
}

export default rootReducer;