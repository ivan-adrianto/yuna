// Get Movies
export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export interface GetMoviesPayload {
  genre: string;
  page: number;
  more?: boolean;
}
export interface GetMoviesRequestAction {
  type: typeof GET_MOVIES_REQUEST;
  payload: GetMoviesPayload;
}
export interface GetMoviesParams {
  language: string;
  sort_by: string;
  page: number;
}
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export interface Movie {
  poster_path: string | null;
  overview: string;
  release_date: string;
  id: number;
  title: string;
  backdrop_path: string | null;
  vote_count: number;
  vote_average: number;
}
export interface GetMoviesSuccessAction {
  type: typeof GET_MOVIES_SUCCESS;
  data: Movie[];
}
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
export interface GetMoviesFailureAction {
  type: typeof GET_MOVIES_FAILURE;
  error: string;
}

// Get More Movies
export const GET_MORE_MOVIES_REQUEST = "GET_MORE_MOVIES_REQUEST";
export interface GetMoviesPayload {
  genre: string;
  page: number;
}
export interface GetMoreMoviesRequestAction {
  type: typeof GET_MORE_MOVIES_REQUEST;
  payload: GetMoviesPayload;
}
export const GET_MORE_MOVIES_SUCCESS = "GET_MORE_MOVIES_SUCCESS";
export interface GetMoreMoviesSuccessAction {
  type: typeof GET_MORE_MOVIES_SUCCESS;
  data: Movie[];
}
export const GET_MORE_MOVIES_FAILURE = "GET_MORE_MOVIES_FAILURE";
export interface GetMoreMoviesFailureAction {
  type: typeof GET_MORE_MOVIES_FAILURE;
  error: string;
}

// Get Categories
export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export interface GetCategoriesRequestAction {
  type: typeof GET_CATEGORIES_REQUEST;
}
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export interface GetCategoriesSuccessAction {
  type: typeof GET_CATEGORIES_SUCCESS;
  data: { name: string };
}
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";
export interface GetCategoriesFailureAction {
  type: typeof GET_CATEGORIES_FAILURE;
  error: string;
}

// Search Movies
export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export interface SearchMoviesParams {
  page?: number;
  query: string;
}
export interface SearchMoviesRequestAction {
  type: typeof SEARCH_MOVIES_REQUEST;
  payload: SearchMoviesParams;
}
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export interface SearchMoviesSuccessAction {
  type: typeof SEARCH_MOVIES_SUCCESS;
  data: Movie[];
}
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";
export interface SearchMoviesFailureAction {
  type: typeof SEARCH_MOVIES_FAILURE;
  error: string;
}

// Search More Movies
export const SEARCH_MORE_MOVIES_REQUEST = "SEARCH_MORE_MOVIES_REQUEST";
export interface SearchMoreMoviesRequestAction {
  type: typeof SEARCH_MORE_MOVIES_REQUEST;
  payload: SearchMoviesParams;
}
export const SEARCH_MORE_MOVIES_SUCCESS = "SEARCH_MORE_MOVIES_SUCCESS";
export interface SearchMoreMoviesSuccessAction {
  type: typeof SEARCH_MORE_MOVIES_SUCCESS;
  data: Movie[];
}
export const SEARCH_MORE_MOVIES_FAILURE = "SEARCH_MORE_MOVIES_FAILURE";
export interface SearchMoreMoviesFailureAction {
  type: typeof SEARCH_MORE_MOVIES_FAILURE;
  error: string;
}

// Get Movie Detail
export const GET_MOVIE_DETAIL_REQUEST = "GET_MOVIE_DETAIL_REQUEST";
export interface GetMovieDetailRequestAction {
  type: typeof GET_MOVIE_DETAIL_REQUEST;
  payload: string;
}
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export interface GetMovieDetailSuccessAction {
  type: typeof GET_MOVIE_DETAIL_SUCCESS;
  data: Movie[];
}
export const GET_MOVIE_DETAIL_FAILURE = "GET_MOVIE_DETAIL_FAILURE";
export interface GetMovieDetailFailureAction {
  type: typeof GET_MOVIE_DETAIL_FAILURE;
  error: string;
}

// Get Actors
export const GET_CASTS_REQUEST = "GET_CASTS_REQUEST";
export interface GetCastsRequestAction {
  type: typeof GET_CASTS_REQUEST;
  payload: string;
}
export const GET_CASTS_SUCCESS = "GET_CASTS_SUCCESS";
export interface Cast {
  original_name: string;
  character: string;
  profile_path: string;
}
export interface GetCastsSuccessAction {
  type: typeof GET_CASTS_SUCCESS;
  data: Cast[];
}
export const GET_CASTS_FAILURE = "GET_CASTS_FAILURE";
export interface GetCastsFailureAction {
  type: typeof GET_CASTS_FAILURE;
  error: string;
}

// Toast
export const SET_TOAST_MESSAGE = "SET_TOAST_MESSAGE";
export interface setToastMessageAction {
  type: typeof SET_TOAST_MESSAGE;
  payload: string;
}
export const SET_TOAST_STATUS = "SET_TOAST_STATUS";
export interface setToastStatusAction {
  type: typeof SET_TOAST_STATUS;
  payload: string;
}

export type MoviesActions =
  | GetMoviesRequestAction
  | GetMoviesSuccessAction
  | GetMoviesFailureAction
  | GetMoreMoviesRequestAction
  | GetMoreMoviesSuccessAction
  | GetMoreMoviesFailureAction
  | GetCategoriesRequestAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction
  | SearchMoviesRequestAction
  | SearchMoviesSuccessAction
  | SearchMoviesFailureAction
  | SearchMoreMoviesRequestAction
  | SearchMoreMoviesSuccessAction
  | SearchMoreMoviesFailureAction
  | GetMovieDetailRequestAction
  | GetMovieDetailSuccessAction
  | GetMovieDetailFailureAction
  | GetCastsRequestAction
  | GetCastsSuccessAction
  | GetCastsFailureAction
  | setToastMessageAction
  | setToastStatusAction
