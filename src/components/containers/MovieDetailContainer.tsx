import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailRequest } from "../../redux/actionCreators";
import MovieBanner from "../MovieDetail/MovieBanner";
import MovieCasts from "../MovieDetail/MovieCasts";

function MovieDetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const getDetail = () => dispatch(getMovieDetailRequest(id as string));
  useEffect(() => {
    getDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MovieBanner />
      <MovieCasts />
    </div>
  );
}

export default MovieDetailContainer;
