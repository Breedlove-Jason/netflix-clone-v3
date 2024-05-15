import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../axios";

// Row component to display movie titles and thumbnails
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  // Fetch data on component mount or when fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results); // Set movie data from the fetched response
      return request; // Returning fetch request (mainly useful for debugging)
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          // Decide if the movie should be shown based on its poster or backdrop availability
          const showMovie = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;
          if (!showMovie) return null; // Skip rendering if no appropriate image is available
          return (
            <img
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
              key={movie.id}
              src={`${base_url}${showMovie}`}
              alt={movie.name || movie.title} // Ensure there is an alternative title if 'name' is not available
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
