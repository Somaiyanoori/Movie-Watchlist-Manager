function StatsFooter({ total, watched, unwatched }) {
  return (
    <footer className="stats-footer">
      <span>Total: {total}</span>
      <span>Watched: {watched}</span>
      <span>Unwatched: {unwatched}</span>
      {watched === total && total > 0 && (
        <span style={{ color: "green", marginLeft: "10px" }}>
          😎 Great job!
        </span>
      )}
    </footer>
  );
}

export default StatsFooter;
