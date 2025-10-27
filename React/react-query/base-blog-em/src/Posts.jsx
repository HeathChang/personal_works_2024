import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";
import { useQueryClient } from "@tanstack/react-query";

const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ['posts', nextPage],
        queryFn: () => fetchPosts(nextPage),
      })
    }
  }, [currentPage, queryClient])

  const deletePostMutation = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }) // 캐시된 데이터를 무효화(invalidate)하는 메서드
    }
  })

  const updatePostMutation = useMutation({
    mutationFn: (postId) => updatePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }) // 캐시된 데이터를 무효화(invalidate)하는 메서드
    }
  })


  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', currentPage], // queryKey: 응답데이터의 unique key로 데이터를 캐싱할 때 사용되며, 해당 queryKey가 변경될때 쿼리가 업데이트
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
            onClick={() => {
              deletePostMutation.reset();
              updatePostMutation.reset();
              setSelectedPost(post)
            }}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(prev => prev - 1)}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage >= maxPostPage - 1} onClick={() => setCurrentPage(prev => prev + 1)}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} deletePostMutation={deletePostMutation} updatePostMutation={updatePostMutation} />}
    </>
  );
}
