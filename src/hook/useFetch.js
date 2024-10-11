import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null); // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result); // Set the fetched data
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData(); // Fetch the data

  }, [url]); // Fetch again when URL changes

  return { data, loading, error }; // Return data, loading, and error
};

export default useFetch;
