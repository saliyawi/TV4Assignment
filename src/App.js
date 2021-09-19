import React, { useState, useEffect } from "react";
import Movie from "./components/movie/Movie";
import Video from "./components/video/Video";

const MOVIE_API =
  "https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    name: "",
    video: "",
    description: "",
  });

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        selectMovie(data[0]);
        setMovies(data);
      });
  }, []);

  const selectMovie = (movie) => {
    console.log(movie);
    setSelectedMovie({
      name: movie.name,
      videoUrl: movie.video,
      description: movie.description,
      image: movie.image,
    });
  };

  return (
    <React.Fragment>
      <Video
        videoUrl={selectedMovie.videoUrl}
        description={selectedMovie.description}
      ></Video>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              handleMovieClice={(movie) => selectMovie(movie)}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default App;
