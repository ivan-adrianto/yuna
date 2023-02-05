import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "../Homepage/HomeCarousel";
import MovieList from "../Homepage/MovieList";
import {
  getCategoriesRequest,
  getMoviesRequest,
} from "../../redux/actionCreators";

function HomeContainer() {
  const dispatch = useDispatch();
  const getMovies = () => dispatch(getMoviesRequest({ page: 1, genre: "" }));
  const getCategories = () => dispatch(getCategoriesRequest());

  useEffect(() => {
    getMovies();
    getCategories();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <HomeCarousel />
      <MovieList />
    </div>
  );
}

export default HomeContainer;
