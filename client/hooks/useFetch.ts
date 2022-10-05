import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  useEffect(() => {
    const getFetch = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const dataJSON = await response.json();
        setData(dataJSON);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getFetch();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
