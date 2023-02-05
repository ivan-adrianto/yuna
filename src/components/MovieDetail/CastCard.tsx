import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Cast } from "../../redux/actionTypes";

interface Props {
  cast: Cast;
}
function CastCard({ cast }: Props) {
  return (
    <div className="text-white">
      {cast.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
          alt="movie"
          className="h-80 rounded-t-lg w-full sm:w-52 object-cover"
        />
      ) : (
        <div className="h-80 rounded-t-lg w-full sm:w-52 flex justify-center items-center bg-gray-500">
          <FontAwesomeIcon icon={faCircleUser} className="text-[120px]" />
        </div>
      )}
      <div className="bg-primary w-full sm:w-52 rounded-b-lg px-3 py-4 text-center h-28">
        <p className="text-xl font-bold line-clamp overflow-hidden ">
          {cast.original_name}
        </p>
        <p>as {cast.character}</p>
      </div>
    </div>
  );
}

export default CastCard;
