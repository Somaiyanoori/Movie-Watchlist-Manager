import { useState } from "react";
import "./App.css";

import AddMovieForm from "./components/AddMovieForm";
import FilterControls from "./components/FilterControls";
import MovieList from "./components/MovieList";
import StatsFooter from "./components/StatsFooter";

function App() {
  // --- STATE ---
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [filter, setFilter] = useState("All");

  // --- DERIVED STATE ---
  const totalCount = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalCount - watchedCount;

  const visibleMovies = movies.filter((movie) => {
    if (filter === "All") return true;
    if (filter === "Watched") return movie.watched === true;
    if (filter === "Unwatched") return movie.watched === false;
    return true;
  });

  // --- HANDLERS ---
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!title) return;

    const newMovie = {
      id: Date.now(),
      title: title,
      genre: genre || "General",
      watched: false,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setGenre("");
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // --- THE UI ---
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Watchlist Manager</h1>
      </header>

      {/* 1. Pass state & handlers down to Form */}
      <AddMovieForm
        title={title}
        setTitle={setTitle}
        genre={genre}
        setGenre={setGenre}
        handleAddMovie={handleAddMovie}
      />

      <FilterControls filter={filter} setFilter={setFilter} />
      <MovieList
        movies={visibleMovies}
        onToggle={toggleWatched}
        onDelete={deleteMovie}
      />
      <StatsFooter
        total={totalCount}
        watched={watchedCount}
        unwatched={unwatchedCount}
      />
    </div>
  );
}

export default App;
