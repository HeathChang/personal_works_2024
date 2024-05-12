import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const updatePost = async (postId, updatedData) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
        throw new Error('Failed to update post');
    }
    return response.json();
};


const GettingStarted = () => {
    // queryKey: 응답데이터의 unique key로 데이터를 캐싱할 때 사용되며, 해당 queryKey가 변경될때 쿼리가 업데이트
    // queryFn: Promise를 반환하는 함수로 API 요청이 들어간다.
    const { isLoading, error, data }  = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })
    const mutation = useMutation({
        mutationFn: fetchPosts
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GettingStarted;