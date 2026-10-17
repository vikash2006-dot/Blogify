import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser, getUserPosts } from "../services/api";
import PostCard from "../components/PostCard";
export default function Author() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      setUser(null);
      setPosts([]);

      try {
        const person = await getUser(id);
        const list = await getUserPosts(id);

        if (!person || !person.id) {
          throw new Error("Author not found");
        }

        setUser(person);
        setPosts(list);
      } catch (err) {
        console.error("Author error:", err);
        setError("Could not load author details.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) {
    return <main className="page">Loading author...</main>;
  }

  if (error || !user) {
    return (
      <main className="page">
        <h1>Author not found</h1>
        <p>{error}</p>
        <Link to="/posts">Back to posts</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/posts" className="back-link">
        ← Back to posts
      </Link>

      <section className="author">
        <p className="tag">AUTHOR PROFILE</p>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
        <p>Website: {user.website}</p>
      </section>

      <section>
        <h2>Posts by {user.name}</h2>
        <p className="count">{posts.length} posts</p>

        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p>No posts found for this author.</p>
        )}
      </section>
    </main>
  );
}
