import { useEffect, useState } from "react";
import { useSearchStore } from "../../store";

export const Pagination = ({ totalCount }) => {
  const limit = useSearchStore((state) => state.limit);
  const page = useSearchStore((state) => state.page);
  const updatePage = useSearchStore((state) => state.updatePage);
  const [pageCount, setPageCount] = useState(Math.ceil(totalCount / limit));
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPageCount(Math.ceil(totalCount / limit));
  }, [totalCount, limit]);

  useEffect(() => {
    setPages(Array.from({ length: pageCount }, (_, index) => index + 1));
  }, [pageCount]);

  return (
    <div className="flex-20 flex-jcc">
      {pages.map((item) => (
        <button
          key={item}
          className={
            page === item ? "pagination pagination-active" : "pagination"
          }
          onClick={() => {
            updatePage(item);
            window.scrollTo(0, 0);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
