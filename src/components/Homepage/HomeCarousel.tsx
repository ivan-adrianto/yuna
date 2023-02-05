import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faComment } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Movie } from "../../redux/actionTypes";
import Spinner from "../common/Spinner";
import { useNavigate } from "react-router-dom";

interface State {
  carouselMovies: Movie[];
  loadingGetMovies: boolean;
}
function HomeCarousel() {
  const navigate = useNavigate();
  const { carouselMovies, loadingGetMovies }: State = useSelector(
    (state: RootState) => state.movies
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {loadingGetMovies && !carouselMovies ? (
          <Spinner containerClass="w-full h-[calc(100vh-92px)]" />
        ) : (
          carouselMovies &&
          carouselMovies.map((movie, index) => (
            <div
              key={`carousel-${index}`}
              onClick={() => navigate(`/detail/${movie.title.replace(/ |:|\/|\.|'|,\?/g, "-")}/${movie.id}`)}
            >
              <div
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                }}
                className="h-[calc(100vh-92px)] bg-center bg-cover px-4 md:px-12 pt-4 pb-14 relative cursor-pointer"
              >
                <div className="h-1/2 w-full absolute bg-gradient-to-b from-transparent to-black bottom-0 left-0 z-0"></div>
                <div className="z-10 flex flex-col justify-between text-white relative h-full container mx-auto">
                  <p className="text-3xl font-extrabold text-white">
                    Popular Movies
                  </p>
                  <div>
                    <p className="text-5xl font-extrabold">{movie.title}</p>
                    <div className="flex gap-9 mb-3 mt-3">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faStar} size={"lg"} />{" "}
                        <span className="text-2xl">{movie.vote_average}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faComment} size={"lg"} />{" "}
                        <span className="text-2xl">
                          {movie.vote_count} reviews
                        </span>
                      </div>
                    </div>
                    <p className="text-xl">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
