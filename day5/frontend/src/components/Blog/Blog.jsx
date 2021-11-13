import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch('/posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const removePost = async (id) => {
    try {
      const response = await fetch(`/posts/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result) {
        console.log(`Статья с id №${id} удалена!`);
        setPosts(posts.filter((post) => post.id != id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Пасты нашего блога</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <button
              onClick={(event) => {
                removePost(post.id);
              }}
            >
              Удалить статью
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
