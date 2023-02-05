import * as types from "../actionTypes";
import api from "./api";
import { API } from "./urls";

// Get Movies
export async function getMovies(params: types.GetMoviesParams) {
  const res = await api.get(API.GET_MOVIES, { params });
  return res;
}

// Get Categories
export async function getCategories() {
  const res = await api.get(API.GET_CATEGORIES);
  return res;
}

// Search Movies
export async function searchMovies(params: types.SearchMoviesParams) {
  const res = await api.get(API.SEARCH_MOVIES, { params });
  return res;
}

// Get Movie Detail
export async function getMovieDetail(id: string) {
  const res = await api.get(`${API.GET_MOVIE_DETAIL}/${id}`);
  return res;
}

// Get Casts
export async function getCasts(id: string) {
  const res = await api.get(`${API.GET_MOVIE_DETAIL}/${id}/credits`);
  return res;
}
