import * as types from "./actionTypes";

// Get Movies
export const getMoviesRequest = (
  payload: types.GetMoviesPayload
): types.GetMoviesRequestAction => {
  return {
    type: types.GET_MOVIES_REQUEST,
    payload,
  };
};

export const getMoviesSuccess = (
  data: types.Movie[]
): types.GetMoviesSuccessAction => {
  return {
    type: types.GET_MOVIES_SUCCESS,
    data,
  };
};

export const getMoviesFailure = (
  error: string
): types.GetMoviesFailureAction => {
  return {
    type: types.GET_MOVIES_FAILURE,
    error,
  };
};

// Get More Movies
export const getMoreMoviesRequest = (
  payload: types.GetMoviesPayload
): types.GetMoreMoviesRequestAction => {
  return {
    type: types.GET_MORE_MOVIES_REQUEST,
    payload,
  };
};

export const getMoreMoviesSuccess = (
  data: types.Movie[]
): types.GetMoreMoviesSuccessAction => {
  return {
    type: types.GET_MORE_MOVIES_SUCCESS,
    data,
  };
};

export const getMoreMoviesFailure = (
  error: string
): types.GetMoreMoviesFailureAction => {
  return {
    type: types.GET_MORE_MOVIES_FAILURE,
    error,
  };
};

// Get Categories
export const getCategoriesRequest = (): types.GetCategoriesRequestAction => {
  return {
    type: types.GET_CATEGORIES_REQUEST,
  };
};

export const getCategoriesSuccess = (data: {
  name: string;
}): types.GetCategoriesSuccessAction => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    data,
  };
};

export const getCategoriesFailure = (
  error: string
): types.GetCategoriesFailureAction => {
  return {
    type: types.GET_CATEGORIES_FAILURE,
    error,
  };
};

// Search Movies
export const searchMoviesRequest = (
  payload: types.SearchMoviesParams
): types.SearchMoviesRequestAction => {
  return {
    type: types.SEARCH_MOVIES_REQUEST,
    payload,
  };
};

export const searchMoviesSuccess = (
  data: types.Movie[]
): types.SearchMoviesSuccessAction => {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    data,
  };
};

export const searchMoviesFailure = (
  error: string
): types.SearchMoviesFailureAction => {
  return {
    type: types.SEARCH_MOVIES_FAILURE,
    error,
  };
};

// Search More Movies
export const searchMoreMoviesRequest = (
  payload: types.SearchMoviesParams
): types.SearchMoreMoviesRequestAction => {
  return {
    type: types.SEARCH_MORE_MOVIES_REQUEST,
    payload,
  };
};

export const searchMoreMoviesSuccess = (
  data: types.Movie[]
): types.SearchMoreMoviesSuccessAction => {
  return {
    type: types.SEARCH_MORE_MOVIES_SUCCESS,
    data,
  };
};

export const searchMoreMoviesFailure = (
  error: string
): types.SearchMoreMoviesFailureAction => {
  return {
    type: types.SEARCH_MORE_MOVIES_FAILURE,
    error,
  };
};

// Get Movie Detail
export const getMovieDetailRequest = (
  payload: string
): types.GetMovieDetailRequestAction => {
  return {
    type: types.GET_MOVIE_DETAIL_REQUEST,
    payload,
  };
};

export const getMovieDetailSuccess = (
  data: types.Movie[]
): types.GetMovieDetailSuccessAction => {
  return {
    type: types.GET_MOVIE_DETAIL_SUCCESS,
    data,
  };
};

export const getMovieDetailFailure = (
  error: string
): types.GetMovieDetailFailureAction => {
  return {
    type: types.GET_MOVIE_DETAIL_FAILURE,
    error,
  };
};

// Get Casts
export const getCastsRequest = (
  payload: string
): types.GetCastsRequestAction => {
  return {
    type: types.GET_CASTS_REQUEST,
    payload,
  };
};

export const getCastsSuccess = (
  data: types.Cast[]
): types.GetCastsSuccessAction => {
  return {
    type: types.GET_CASTS_SUCCESS,
    data,
  };
};

export const getCastsFailure = (error: string): types.GetCastsFailureAction => {
  return {
    type: types.GET_CASTS_FAILURE,
    error,
  };
};

// Toast
export const setToastMessage = (
  payload: string
): types.setToastMessageAction => {
  return {
    type: types.SET_TOAST_MESSAGE,
    payload,
  };
};
export const setToastStatus = (
    payload: string
  ): types.setToastStatusAction => {
    return {
      type: types.SET_TOAST_STATUS,
      payload,
    };
  };
  
