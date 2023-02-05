import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScrollToFetch } from "../../hooks/useScrollToFetch";
import {
  getMoreMoviesRequest,
  getMoviesRequest,
} from "../../redux/actionCreators";
import { Movie } from "../../redux/actionTypes";
import { RootState } from "../../redux/reducers";
import MovieCard from "../common/MovieCard";
import Spinner from "../common/Spinner";

interface State {
  dataGetMovies: Movie[];
  dataGetCategories: { name: string; id: string }[];
  loadingGetMovies: boolean;
  endOfGetMovies: boolean;
}
function MovieList() {
  const dispatch = useDispatch();
  const getMovies = (genre: string) =>
    dispatch(getMoviesRequest({ page: 1, genre }));
  const getMoreMovies = (genre: string, page: number) =>
    dispatch(getMoreMoviesRequest({ page, genre }));
  const {
    dataGetMovies,
    dataGetCategories,
    loadingGetMovies,
    endOfGetMovies,
  }: State = useSelector((state: RootState) => state.movies);

  const [activeCategory, setActiveCategory] = useState({ name: "", id: "" });
  const [page, setPage] = useState(1);
  const chooseCategory = (category: { name: string; id: string }) => {
    setActiveCategory(category);
    getMovies(category.id);
  };

  useScrollToFetch(
    () => {
      getMoreMovies(activeCategory.id, page + 1);
      setPage(page + 1);
    },
    [page, activeCategory.id],
    endOfGetMovies
  );

  return (
    <div className="container mx-auto mt-6 px-10 flex-col pb-10">
      <h1 className="font-bold text-4xl text-primary mb-4">
        Browse by category
      </h1>
      <div className="flex gap-3 flex-wrap mb-5">
        <p
          className={`${
            !activeCategory.id
              ? "text-white bg-primary font-bold"
              : "text-primary bg-white border-primary border-2 hover:text-white hover:bg-secondary hover:font-bold"
          } text-lg min-w-[120px] flex justify-center py-2 px-3 rounded-full cursor-pointer`}
          onClick={() => chooseCategory({ name: "", id: "" })}
        >
          All Categories
        </p>
        {dataGetCategories &&
          dataGetCategories.map((category, index) => (
            <p
              key={`cat-${index}`}
              className={`${
                activeCategory === category
                  ? "text-white bg-primary font-bold"
                  : "text-primary bg-white border-primary border-2 hover:text-white hover:bg-secondary hover:font-bold"
              } text-lg min-w-[120px] flex justify-center py-2 px-3 rounded-full cursor-pointer`}
              onClick={() => chooseCategory(category)}
            >
              {category.name}
            </p>
          ))}
      </div>
      {loadingGetMovies && dataGetMovies.length < 1 ? (
        <Spinner containerClass="w-full h-96" />
      ) : (
        dataGetMovies.length > 0 && (
          <div>
            <div className="flex gap-8 flex-wrap mt-5 justify-center sm:justify-start">
              {dataGetMovies.map((movie, index) => (
                <MovieCard movie={movie} key={`movie-${index}`} />
              ))}
            </div>
            <Spinner containerClass="w-full h-72" />
          </div>
        )
      )}
    </div>
  );
}

export default MovieList;
