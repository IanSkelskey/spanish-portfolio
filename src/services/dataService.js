import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from JSON files in the data directory
 * 
 * @param {string} fileName - The name of the JSON file without extension
 * @returns {object} { data, loading, error }
 */
export const useDataFetching = (fileName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Dynamic import of the JSON file
        const module = await import(`../data/${fileName}.json`);
        setData(module.default);
        setError(null);
      } catch (err) {
        console.error(`Error loading ${fileName}.json:`, err);
        setError(`Failed to load data from ${fileName}.json`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  return { data, loading, error };
};
