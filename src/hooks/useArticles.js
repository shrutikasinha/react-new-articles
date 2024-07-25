import { useState, useEffect } from "react";
import { getArticles } from "../utils/Api";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
          const data = await getArticles();
          if (data.status !== 'OK') {
          throw new Error("Network response was not ok");
        }
        setArticles(data.results);
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
