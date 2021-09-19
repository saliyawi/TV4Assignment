import React, { useRef } from "react";
import "./style.css";
import VideoTooltip from "../video-tooltip/VideoTooltip";

const Movie = ({ movie, handleMovieClice }) => {
  const movieNode = useRef(null);
  return (
    <VideoTooltip toolTipText={movie.description} parentRef={movieNode}>
      <div
        ref={movieNode}
        className="movie"
        onClick={() => handleMovieClice(movie)}
      >
        <img src={movie.image} alt={movie.name} />
        <div className="movie-info">
          <h3>{movie.name}</h3>
        </div>
        {/* <div className="movie-over">
                 <p>{description}</p>
            </div> */}
      </div>
    </VideoTooltip>
  );
};

export default Movie;
