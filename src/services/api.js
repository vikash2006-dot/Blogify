const url = "https://jsonplaceholder.typicode.com";

async function get(path) {
  const res = await fetch(`${url}${path}`);

  if (!res.ok) {
    throw new Error("Data could not be loaded");
  }

  return res.json();
}

export function getPosts() {
  return get("/posts");
}

export function getPost(id) {
  return get(`/posts/${id}`);
}

export function getComments(id) {
  return get(`/posts/${id}/comments`);
}

export function getUser(id) {
  return get(`/users/${id}`);
}

export function getUserPosts(id) {
  return get(`/users/${id}/posts`);
}
