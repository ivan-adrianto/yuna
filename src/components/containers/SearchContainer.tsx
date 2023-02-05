import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchMoviesRequest } from "../../redux/actionCreators";
import { SearchMoviesParams } from "../../redux/actionTypes";
import Navbar from "../common/Navbar";
import SearchResult from "../Search/SearchResult";

function SearchContainer() {
  const query = useSearchParams()[0].get("query");
  const dispatch = useDispatch();
  const searchMovies = (data: SearchMoviesParams) =>
    dispatch(searchMoviesRequest(data));

  useEffect(() => {
    searchMovies({ page: 1, query: query as string });
    // eslint-disable-next-line
  }, [query]);

  return <SearchResult />;
}

export default SearchContainer;
