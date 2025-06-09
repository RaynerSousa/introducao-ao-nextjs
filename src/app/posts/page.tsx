"use client"
import { useState, useEffect } from "react"

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostsPage (){

    const [posts, setPosts] = useState <Post[]> ([])  
    
    useEffect(() => {   

        const fetchPosts = async () => {
           const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
           const data = await res.json();
           setPosts(data);
        }
        fetchPosts();
    }, [])

    return(
        <div className="bg-gray-700 min-h-screen ">
            <h1 className="text-3xl font-bold mb-6 text-center ">Ultimos posts</h1>


            {posts.map((posts) => (
                <div key={posts.id} className="bg-blue-200 p-4 m-4 rounded shadow">
                    <h2 className="text-xl font-semibold">{posts.title}</h2>
                    <p className="text-gray-700">{posts.body}</p>
                </div>
            ))}





        </div>
    )
}