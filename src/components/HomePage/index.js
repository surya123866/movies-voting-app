import React, { useEffect, useState } from "react";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { format } from "date-fns";

import "./index.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NoPoster from "../../No poster availble.jpg";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("movies");
  const [selectedLanguage, setSelectedLanguage] = useState("kannada");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedSort, setSelectedSort] = useState("voting");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: selectedCategory,
          language: selectedLanguage,
          genre: selectedGenre,
          sort: selectedSort,
        }),
      });
      const data = await response.json();
      setMovies(data.result);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchMovies();
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    fetchMovies();
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    fetchMovies();
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    fetchMovies();
  };

  const getDate = (unixTimestamp) => {
    const timestampInMilliseconds = unixTimestamp * 1000;
    const formattedDate = format(
      new Date(timestampInMilliseconds),
      "dd MMM yyyy"
    );

    return formattedDate;
  };

  return (
    <>
      <Header />
      <div className="movies-sorting-container">
        <div className="seletion-container">
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="movies">Movies</option>
            <option value="people">People</option>
            <option value="accessories">Accessories</option>
          </select>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="all">All Languages</option>
            <option value="telugu">Telugu</option>
            <option value="tamil">Tamil</option>
            <option value="kannada">kannada</option>
            <option value="malayalam">Malayalam</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>

          <select
            value={selectedGenre}
            onChange={(e) => handleGenreChange(e.target.value)}
          >
            <option value="all">All Genres</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantacy</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Triller</option>
            <option value="adventure">Adventure</option>
            <option value="scifi">Scifi</option>
            <option value="biography">Biography</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="horror">Horror</option>
          </select>

          <select
            value={selectedSort}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="popularity">Popularity</option>
            <option value="voting">Voting</option>
          </select>
        </div>
        <ul className="list-items-container">
          {movies ? (
            movies.map((movie) => (
              <li key={movie._id} className="list-item">
                <div className="movie-detils-container">
                  <div className="image-and-voting-container">
                    <div className="votes-container">
                      <BiSolidUpvote />
                      <p>{movie.totalVoted}</p>
                      <BiSolidDownvote />
                      <p>Votes</p>
                    </div>
                    <img
                      className="image"
                      src={movie.poster ? `${movie.poster}` : NoPoster}
                      alt={movie.title}
                    />
                  </div>
                  <div className="movie-details-text-container">
                    <h3>{movie.title}</h3>
                    <p>Genre: {movie.genre}</p>
                    <p>director: {movie.director}</p>
                    <p>Staring: {movie.stars}</p>
                    <p>Language: {movie.language}</p>
                    <p>
                      {movie.runtime} Mins | {movie.language} |{" "}
                      {getDate(movie.releasedDate)}
                    </p>
                    <p>
                      Views: {movie.pageViews} | Voted By {movie.totalVoted}{" "}
                      People
                    </p>
                  </div>
                </div>
                <button>Watch Trailer</button>
                <hr className="hr-line"/>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
