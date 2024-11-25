function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      <a
        onClick={() => {
          page === 1 ? alert("첫번째 페이지입니다.") : setPage(page - 1);
        }}
      >
        <i className="icon_pg_left_off"></i>
        <i className="icon_pg_left_on"></i>
      </a>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <a key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </a>
        ))}
      <a
        onClick={() => {
          page === numPages ? alert("마지막 페이지입니다.") : setPage(page + 1);
        }}
      >
        <i className="icon_pg_right_off"></i>
        <i className="icon_pg_right_on"></i>
      </a>
    </div>
  );
}

export default Pagination;
