import { fetchComments } from "./api";
import "./PostDetail.css";
import { useQuery } from "@tanstack/react-query";

export function PostDetail({ post, deletePostMutation, updatePostMutation }) {


  const { data, isLoading, error } = useQuery({
    queryKey: ['comments', post.id],
    queryFn: () => fetchComments(post.id),
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h3 style={{ color: "blue" }}>POST DETAIL:: {post.title}</h3>
      <div>
        <button onClick={() => deletePostMutation.mutate(post.id)}>Delete</button>
        {deletePostMutation.isPending && <p className="loading">Deleting...</p>}
        {deletePostMutation.isSuccess && <p className="success">Deleted!</p>}
        {deletePostMutation.isError && <p className="error">Error deleting post</p>}
      </div>
      <button onClick={() => updatePostMutation.mutate(post.id)}>Update title</button>
      {updatePostMutation.isPending && <p className="loading">Updating...</p>}
      {updatePostMutation.isSuccess && <p className="success">Updated!</p>}
      {updatePostMutation.isError && <p className="error">Error updating post</p>}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
