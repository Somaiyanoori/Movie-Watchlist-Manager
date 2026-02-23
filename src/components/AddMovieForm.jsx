function AddMovieForm({ title, setTitle, genre, setGenre, handleAddMovie }) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="input-text"
        placeholder="Movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="input-select"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
      </select>
      <button className="btn-add" onClick={handleAddMovie}>
        Add
      </button>
    </div>
  );
}

export default AddMovieForm;
