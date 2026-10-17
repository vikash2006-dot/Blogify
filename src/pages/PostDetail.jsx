import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost, getComments } from "../services/api";
export default function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function load() {
      setLoading(true);
      setError("");
      setPost(null);
      setComments([]);

      try {
        const data = await getPost(id);

        if (!data || !data.id) {
          throw new Error("Post not found");
        }

        const list = await getComments(id);

        if (active) {
          setPost(data);
          setComments(list);
        }
      } catch {
        if (active) {
          setError("Post could not be loaded.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return <main className="page message">Loading post...</main>;
  }

  if (error || !post) {
    return (
      <main className="page message">
        <h1>Post not found</h1>
        <p>{error}</p>
        <Link to="/posts" className="btn">
          Back to posts
        </Link>
      </main>
    );
  }

  return (
    <main className="page detail">
      <Link to="/posts" className="back-link">
        ← All posts
      </Link>

      <article className="article">
        <p className="tag">POST #{post.id}</p>
        <h1>{post.title}</h1>
        <p className="article-body">{post.body}</p>
      </article>

      <section className="comments">
        <h2>Comments<span>.</span></h2>
        <p className="count">{comments.length} comments</p>

        {comments.map((comment) => (
          <article className="comment" key={comment.id}>
            <h3>{comment.name}</h3>
            <a href={`mailto:${comment.email}`}>
              {comment.email}
            </a>
            <p>{comment.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
