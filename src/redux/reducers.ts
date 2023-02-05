import { combineReducers } from "redux";
import * as types from "./actionTypes";

export const initialState = {
  carouselMovies: null,

  // Toast
  toastMessage: "",
  toastStatus: "error",

  //  Get Movies
  loadingGetMovies: false,
  dataGetMovies: [],
  errGetMovies: null,

  //   Get More Movies
  loadingGetMoreMovies: false,
  errGetMoreMovies: null,
  endOfGetMovies: false,

  //   Get Categories
  loadingGetCategories: false,
  dataGetCategories: false,
  errGetCategories: null,

  //   Search Movies
  loadingSearchMovies: false,
  loadingSearchMoreMovies: false,
  dataSearchMovies: [],
  errSearchMovies: null,
  endOfSearch: false,

  //   Get Movie Detail
  loadingGetMovieDetail: false,
  dataGetMovieDetail: null,
  errGetMovieDetail: null,

  //   Get Casts
  loadingGetCasts: false,
  dataGetCasts: null,
  errGetCasts: null,
};

const movieReducer = (state = initialState, action: types.MoviesActions) => {
  switch (action.type) {
    // Get Movies
    case types.GET_MOVIES_REQUEST:
      return {
        ...state,
        loadingGetMovies: true,
        errGetMovies: null,
      };
    case types.GET_MOVIES_SUCCESS:
      if (!state.carouselMovies) {
        return {
          ...state,
          carouselMovies: action.data.slice(0, 3),
          loadingGetMovies: false,
          dataGetMovies: action.data,
          errGetMovies: null,
        };
      }
      return {
        ...state,
        loadingGetMovies: false,
        dataGetMovies: action.data,
        errGetMovies: null,
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        loadingGetMovies: false,
        dataGetMovies: [],
        errGetMovies: action.error,
      };

    // Get Categories
    case types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingGetCategories: true,
        dataGetCategories: false,
        errGetCategories: null,
      };
    case types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loadingGetCategories: false,
        dataGetCategories: action.data,
        errGetCategories: null,
      };
    case types.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loadingGetCategories: false,
        dataGetCategories: false,
        errGetCategories: action.error,
      };

    // Get More Movies
    case types.GET_MORE_MOVIES_REQUEST:
      return {
        ...state,
        loadingGetMoreMovies: true,
        errGetMoreMovies: null,
      };
    case types.GET_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        loadingGetMoreMovies: false,
        dataGetMovies: [...state.dataGetMovies, ...action.data],
        errGetMoreMovies: null,
        endOfGetMovies: action.data.length === 0,
      };
    case types.GET_MORE_MOVIES_FAILURE:
      return {
        ...state,
        loadingGetMoreMovies: false,
        dataGetMovies: false,
        errGetMoreMovies: action.error,
      };

    //Search Movies
    case types.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loadingSearchMovies: true,
        errSearchMovies: null,
      };
    case types.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loadingSearchMovies: false,
        dataSearchMovies: action.data,
        errSearchMovies: null,
      };
    case types.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loadingSearchMovies: false,
        dataSearchMovies: false,
        errSearchMovies: action.error,
      };

    //Search More Movies
    case types.SEARCH_MORE_MOVIES_REQUEST:
      return {
        ...state,
        loadingSearchMoreMovies: true,
        errSearchMovies: null,
      };
    case types.SEARCH_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        loadingSearchMoreMovies: false,
        dataSearchMovies: [...state.dataSearchMovies, ...action.data],
        errSearchMovies: null,
        endOfSearch: action.data.length === 0,
      };
    case types.SEARCH_MORE_MOVIES_FAILURE:
      return {
        ...state,
        loadingSearchMoreMovies: false,
        dataSearchMovies: [],
        errSearchMovies: action.error,
      };

    // Get Movie Detail
    case types.GET_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loadingGetMovieDetail: true,
        dataGetMovieDetail: false,
        errGetMovieDetail: null,
      };
    case types.GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loadingGetMovieDetail: false,
        dataGetMovieDetail: action.data,
        errGetMovieDetail: null,
      };
    case types.GET_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        loadingGetMovieDetail: false,
        dataGetMovieDetail: false,
        errGetMovieDetail: action.error,
      };

    // Get Cast
    case types.GET_CASTS_REQUEST:
      return {
        ...state,
        loadingGetCasts: true,
        dataGetCasts: false,
        errGetCasts: null,
      };
    case types.GET_CASTS_SUCCESS:
      return {
        ...state,
        loadingGetCasts: false,
        dataGetCasts: action.data,
        errGetCasts: null,
      };
    case types.GET_CASTS_FAILURE:
      return {
        ...state,
        loadingGetCasts: false,
        dataGetCasts: false,
        errGetCasts: action.error,
      };

    // Toast
    case types.SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      };
    case types.SET_TOAST_STATUS:
      return {
        ...state,
        toastStatus: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  movies: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
