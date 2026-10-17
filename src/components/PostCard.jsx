import { Link } from "react-router-dom";
export default function PostCard({ post }) {
  const body =
    post.body.length > 80
      ? post.body.slice(0, 80).trimEnd() + "..."
      : post.body;

  return (
    <article className="post-card">
      <span className="post-label">POST #{post.id}</span>

      <h2>{post.title}</h2>

      <p>{body}</p>

      <div className="post-links">
        <Link to={`/posts/${post.id}`} className="read-link">
          Read more →
        </Link>

        <Link to={`/users/${post.userId}`} className="author-link">
          View author →
        </Link>
      </div>
    </article>
  );
}
