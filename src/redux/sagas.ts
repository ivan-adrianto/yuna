import { all, call, put, takeLatest } from "redux-saga/effects";
import { isAxiosError } from "axios";
import * as types from "./actionTypes";
import * as actions from "./actionCreators";
import {
  getCasts,
  getCategories,
  getMovieDetail,
  getMovies,
  searchMovies,
} from "./services/movies";

/* ---- Get Movies ---- */
function* getMoviesSaga(action: types.GetMoviesRequestAction) {
  try {
    const params = {
      page: action.payload.page,
      with_genres: action.payload.genre,
      language: "en-US",
      sort_by: "popularity.desc",
    };
    const { data } = yield call(getMovies, params);
    yield put(actions.getMoviesSuccess(data.results));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(actions.getMoviesFailure(error.response?.data.status_message));
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.getMoviesFailure("Something Wrong Happened. Try Again Later")
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getMoviesRequestSaga() {
  yield takeLatest(types.GET_MOVIES_REQUEST, getMoviesSaga);
}

/* ---- Get More Movies ---- */
function* getMoreMoviesSaga(action: types.GetMoreMoviesRequestAction) {
  try {
    const params = {
      page: action.payload.page,
      with_genres: action.payload.genre,
      language: "en-US",
      sort_by: "popularity.desc",
    };
    const { data } = yield call(getMovies, params);
    yield put(actions.getMoreMoviesSuccess(data.results));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(
        actions.getMoreMoviesFailure(error.response?.data.status_message)
      );
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.getMoreMoviesFailure(
          "Something Wrong Happened. Try Again Later"
        )
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getMoreMoviesRequestSaga() {
  yield takeLatest(types.GET_MORE_MOVIES_REQUEST, getMoreMoviesSaga);
}

/* ---- Get Categories ---- */
function* getCategoriesSaga() {
  try {
    const { data } = yield call(getCategories);
    yield put(actions.getCategoriesSuccess(data.genres));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(
        actions.getCategoriesFailure(error.response?.data.status_message)
      );
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.getCategoriesFailure(
          "Something Wrong Happened. Try Again Later"
        )
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getCategoriesRequestSaga() {
  yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategoriesSaga);
}

/* ---- Search Movies ---- */
function* searchMoviesSaga(action: types.SearchMoviesRequestAction) {
  try {
    const params = {
      page: action.payload.page,
      query: action.payload.query,
    };
    const { data } = yield call(searchMovies, params);
    if (data.results.length > 0) {
      yield put(actions.searchMoviesSuccess(data.results));
    } else {
      yield put(actions.searchMoviesFailure("Unfortunately, no results found"));
    }
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(
        actions.searchMoviesFailure(error.response?.data.status_message)
      );
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.searchMoviesFailure("Something Wrong Happened. Try Again Later")
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* searchMoviesRequestSaga() {
  yield takeLatest(types.SEARCH_MOVIES_REQUEST, searchMoviesSaga);
}

/* ---- Search More Movies ---- */
function* searchMoreMoviesSaga(action: types.SearchMoreMoviesRequestAction) {
  try {
    const params = {
      page: action.payload.page,
      query: action.payload.query,
    };
    const { data } = yield call(searchMovies, params);
    yield put(actions.searchMoreMoviesSuccess(data.results));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(
        actions.searchMoreMoviesFailure(error.response?.data.status_message)
      );
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.searchMoreMoviesFailure(
          "Something Wrong Happened. Try Again Later"
        )
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* searchMoreMoviesRequestSaga() {
  yield takeLatest(types.SEARCH_MORE_MOVIES_REQUEST, searchMoreMoviesSaga);
}

/* ---- Get Movie Detail ---- */
function* getMovieDetailSaga(action: types.GetMovieDetailRequestAction) {
  try {
    const { data } = yield call(getMovieDetail, action.payload);
    yield put(actions.getMovieDetailSuccess(data));
    yield put(actions.getCastsRequest(action.payload));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(
        actions.getMovieDetailFailure(error.response?.data.status_message)
      );
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.getMovieDetailFailure(
          "Something Wrong Happened. Try Again Later"
        )
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getMovieDetailRequestSaga() {
  yield takeLatest(types.GET_MOVIE_DETAIL_REQUEST, getMovieDetailSaga);
}

/* ---- Get Movie Detail ---- */
function* getCastsSaga(action: types.GetCastsRequestAction) {
  try {
    const { data } = yield call(getCasts, action.payload);
    yield put(actions.getCastsSuccess(data.cast));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(actions.getCastsFailure(error.response?.data.status_message));
      yield put(actions.setToastMessage(error.response?.data.status_message));
    } else {
      yield put(
        actions.getCastsFailure("Something Wrong Happened. Try Again Later")
      );
      yield put(
        actions.setToastMessage("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getCastsRequestSaga() {
  yield takeLatest(types.GET_CASTS_REQUEST, getCastsSaga);
}

export function* saga() {
  yield all([
    call(getMoviesRequestSaga),
    call(getMoreMoviesRequestSaga),
    call(getCategoriesRequestSaga),
    call(searchMoviesRequestSaga),
    call(searchMoreMoviesRequestSaga),
    call(getMovieDetailRequestSaga),
    call(getCastsRequestSaga),
  ]);
}
