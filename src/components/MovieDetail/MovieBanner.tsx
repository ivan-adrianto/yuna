import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Movie } from "../../redux/actionTypes";
import Spinner from "../common/Spinner";

interface State {
  dataGetMovieDetail: Movie;
  loadingGetMovieDetail: boolean;
}
function MovieBanner() {
  const {
    dataGetMovieDetail: data,
    loadingGetMovieDetail: loading,
  }: State = useSelector((state: RootState) => state.movies);
  return loading ? (
    <Spinner containerClass="w-full h-[calc(100vh-92px)]" widthClass="w-16" />
  ) : (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${data?.backdrop_path}")`,
      }}
      className="min-h-[calc(100vh-92px)] bg-center bg-cover px-4 md:px-12 pt-4 pb-14 relative cursor-pointer"
    >
      <div>
        <div className="h-full w-full absolute bg-white opacity-70 bottom-0 left-0 z-0"></div>
        <div className="z-10 flex flex-col justify-between text-gray-800 relative h-full container mx-auto pt-10">
          <div className="flex flex-col gap-2 h-full items-center">
            <img
              src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
              alt={data?.title}
              className="rounded-lg shadow-lg mb-4 h-96 w-64"
            />
            <p className="text-4xl lg:text-6xl font-extrabold md:w-3/4 text-center">
              {data?.title}
            </p>
            <div className="flex flex-wrap gap-x-9 gap-y-2 lg:gap-y-9 mb-4 mt-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className=" text-xl lg:text-2xl"
                />{" "}
                <span className=" text-xl lg:text-2xl">
                  {Math.round(data?.vote_average * 10) / 10} / 10
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faComment}
                  className=" text-xl lg:text-2xl"
                />{" "}
                <span className="text-xl lg:text-2xl">
                  {data?.vote_count} reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className=" text-xl lg:text-2xl"
                />{" "}
                <span className="text-lg lg:text-2xl">
                  {data?.release_date}
                </span>
              </div>
            </div>
            <p className="text-lg lg:text-2xl md:w-3/4">{data?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
