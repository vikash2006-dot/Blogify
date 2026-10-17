import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="not-found">
      <p className="tag">ERROR 404</p>
      <h1>Page not found.</h1>
      <p>This page does not exist.</p>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </main>
  );
}
