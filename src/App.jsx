import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import Author from "./pages/Author";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/users/:id" element={<Author />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <p>Blogify · A simple place to read.</p>
      </footer>
    </>
  );
}
