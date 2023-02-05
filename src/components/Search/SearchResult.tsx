import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useScrollToFetch } from "../../hooks/useScrollToFetch";
import { searchMoreMoviesRequest } from "../../redux/actionCreators";
import { Movie, SearchMoviesParams } from "../../redux/actionTypes";
import { RootState } from "../../redux/reducers";
import MovieCard from "../common/MovieCard";
import Spinner from "../common/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

interface State {
  dataSearchMovies: Movie[];
  loadingSearchMovies: boolean;
  loadingSearchMoreMovies: boolean;
  errSearchMovies: string | null;
  endOfSearch: boolean;
}
function SearchResult() {
  const query = useSearchParams()[0].get("query");
  const dispatch = useDispatch();
  const searchMore = (data: SearchMoviesParams) =>
    dispatch(searchMoreMoviesRequest(data));

  const {
    loadingSearchMovies,
    dataSearchMovies,
    errSearchMovies,
    loadingSearchMoreMovies,
    endOfSearch,
  }: State = useSelector((state: RootState) => state.movies);

  const [page, setPage] = useState(1);

  useScrollToFetch(
    () => {
      searchMore({ page: page + 1, query: query as string });
      setPage(page + 1);
    },
    [page],
    endOfSearch
  );

  return (
    <div className="container mx-auto mt-6 px-10 pb-20">
      {!errSearchMovies && dataSearchMovies.length > 0 && (
        <p className="text-2xl font-bold">
          Displaying search results for {query}
        </p>
      )}
      {errSearchMovies === "Unfortunately, no results found" && (
        <div className="flex flex-col gap-6 justify-center items-center w-full h-96 mt-20">
          <FontAwesomeIcon
            icon={faFaceSadTear}
            className="text-[150px] text-primary"
          />
          <p className="text-2xl font-bold text-center">{errSearchMovies}</p>
        </div>
      )}
      {loadingSearchMovies ? (
        <Spinner containerClass="w-full h-96" />
      ) : (
        dataSearchMovies.length > 0 && (
          <div>
            <div className="flex gap-8 flex-wrap mt-5 justify-center sm:justify-start">
              {dataSearchMovies.map((movie, index) => (
                <MovieCard movie={movie} key={`movie-${index}`} />
              ))}
            </div>
            {loadingSearchMoreMovies && (
              <Spinner containerClass="w-full h-72" />
            )}
          </div>
        )
      )}
      {endOfSearch && (
        <p className="text-center text-lg font-bold mt-10">
          No more search result
        </p>
      )}
    </div>
  );
}

export default SearchResult;
