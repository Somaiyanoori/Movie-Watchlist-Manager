function FilterControls({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={`filter-btn ${filter === "All" ? "active" : ""}`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "Watched" ? "active" : ""}`}
        onClick={() => setFilter("Watched")}
      >
        Watched
      </button>
      <button
        className={`filter-btn ${filter === "Unwatched" ? "active" : ""}`}
        onClick={() => setFilter("Unwatched")}
      >
        Unwatched
      </button>
    </div>
  );
}

export default FilterControls;
