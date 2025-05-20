import { useState } from "react";
import usePostList from "./hooks/usePostList";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  /* const [page, setPage] = useState(1);  Tego nie może być przy infiniteQuery */
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePostList({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
