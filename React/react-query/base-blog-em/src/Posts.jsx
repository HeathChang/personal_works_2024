import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', currentPage, 'check'], // queryKey: 응답데이터의 unique key로 데이터를 캐싱할 때 사용되며, 해당 queryKey가 변경될때 쿼리가 업데이트
    queryFn: () => fetchPosts(currentPage), // queryFn: Promise를 반환하는 함수로 API 요청이 들어간다.
    staleTime: 2000, // 2초 동안 데이터를 캐싱
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <>
      <ul>
        {data?.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => { }}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => { }}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
