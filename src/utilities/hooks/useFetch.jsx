import { useState, useEffect } from "react";
import { marked } from "marked";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let fetchData = async () => {
    try {
      const response = await fetch(url);
      const markdown = await response.text();
      const data = marked(markdown);
      setData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return { data, loading, error };
}

export default useFetch;
