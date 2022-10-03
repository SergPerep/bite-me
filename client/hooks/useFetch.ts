import { useEffect, useState } from "react";

const useFetch = (url: string, defaultValue: unknown) => {
  const [data, setData] = useState(defaultValue);
  useEffect(() => {
    const getFetch = async () => {
      try {
        const response = await fetch(url);
        const dataJSON = await response.json();
        setData(dataJSON);
      } catch (error) {
        console.error(error);
      }
    };
    getFetch();
  }, [url]);
  return data;
};

export default useFetch;
