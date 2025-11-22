import { useState, useEffect } from "react";

function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p><strong>{post.title}</strong></p>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostsFetchAsync;
