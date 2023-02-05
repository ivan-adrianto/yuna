import React from "react";
import { useSelector } from "react-redux";
import { Cast } from "../../redux/actionTypes";
import { RootState } from "../../redux/reducers";
import Spinner from "../common/Spinner";
import CastCard from "./CastCard";

interface State {
  dataGetCasts: Cast[];
  loadingGetCasts: boolean;
  loadingGetMovieDetail: boolean;
}
function MovieCasts() {
  const {
    dataGetCasts,
    loadingGetCasts: loadingCasts,
    loadingGetMovieDetail: loadingMovie,
  }: State = useSelector((state: RootState) => state.movies);
  return (
    <div className="container mx-auto mt-6 px-10 flex-col pb-10">
      <h1 className="text-4xl font-bold">Casts</h1>
      {loadingCasts || loadingMovie ? (
        <Spinner containerClass="w-full h-72" />
      ) : (
        <div className="flex gap-8 flex-wrap mt-5 ">
          {dataGetCasts &&
            dataGetCasts.map((cast, index) => (
              <CastCard key={`casr-${index}`} cast={cast} />
            ))}
        </div>
      )}
    </div>
  );
}

export default MovieCasts;
