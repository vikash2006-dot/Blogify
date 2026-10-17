import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="tag">WELCOME TO BLOGIFY</p>

        <h1>
          Stories worth
          <br />
          <span>your time.</span>
        </h1>

        <p className="intro">
          Read interesting posts, explore new ideas,
          and discover stories from different people.
        </p>

        <Link to="/posts" className="btn">
          Read posts →
        </Link>
      </section>

      <section className="home-note">
        <h2>Find your next read.</h2>
        <p>
          Browse articles, read the full story,
          and see what other readers have to say.
        </p>
      </section>
    </main>
  );
}
