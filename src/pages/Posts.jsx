import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import PostCard from "../components/PostCard";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch {
        setError("Posts could not be loaded.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const result = posts.filter((post) =>
    post.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="page">
      <section className="page-head">
        <p className="tag">THE BLOG LIBRARY</p>
        <h1>Explore posts<span>.</span></h1>
        <p>Find a story that catches your attention.</p>
      </section>

      <input
        className="search"
        type="search"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!loading && !error && (
        <p className="count">
          Showing {result.length} of {posts.length} posts
        </p>
      )}

      {loading && <p className="message">Loading posts...</p>}

      {error && (
        <div className="message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      )}

      {!loading && !error && result.length > 0 && (
        <section className="posts-grid">
          {result.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      )}

      {!loading && !error && result.length === 0 && (
        <p className="message">No matching posts found.</p>
      )}
    </main>
  );
}
