function MovieList({ movies, onToggle, onDelete }) {
  return (
    <ul className="movie-list">
      {movies.length === 0 && (
        <div className="empty-state">No movies found. Add one!</div>
      )}

      {movies.map((movie) => (
        <li
          key={movie.id}
          className={`movie-item ${movie.watched ? "watched" : ""}`}
        >
          <div className="movie-info">
            <span className="movie-title">{movie.title}</span>
            <span className="movie-genre">{movie.genre}</span>
          </div>
          <div className="movie-actions">
            <button className="btn-toggle" onClick={() => onToggle(movie.id)}>
              {movie.watched ? "Unwatch" : "Watch"}
            </button>
            <button className="btn-delete" onClick={() => onDelete(movie.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
