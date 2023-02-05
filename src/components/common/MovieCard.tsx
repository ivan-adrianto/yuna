import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFilm } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../../redux/actionTypes";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}
function MovieCard({ movie }: Props) {
  return (
    <Link
      className="text-white cursor-pointer w-52 hover:animate-zoom-in hover:scale-[1.05]"
      to={`/detail/${movie.title.replace(/ |:|\/|\.|'|,\?/g, "-")}/${movie.id}`}
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie"
          className="h-80 rounded-t-lg w-52 object-cover"
        />
      ) : (
        <div className="h-80 rounded-t-lg w-52 flex justify-center items-center bg-gray-500">
          <FontAwesomeIcon icon={faFilm} className="text-[60px]" />
        </div>
      )}
      <div className="h-36 bg-primary sm:w-52 rounded-b-lg px-3 py-2 hover:zoom-in">
        <div className="flex items-center gap-2 mb-1">
          <FontAwesomeIcon icon={faStar} />{" "}
          <span className="text-md font-bold">{movie.vote_average} / 10</span>
        </div>
        <p className=" text-xl font-bold line-clamp overflow-hidden">
          {movie.title}
        </p>
        <p className="text-md">
          {movie.release_date && movie.release_date.slice(0, 4)}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
