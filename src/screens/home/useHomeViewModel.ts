import { useEffect, useState } from "react";
import { fetchPosts, Post } from "../../data/api";

export function useHomeViewModel() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { loadPosts(); }, [])

  async function loadPosts() {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError(`Failed to load posts: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false)
    }
  }

  return { posts, loading, error, retry: loadPosts }
}