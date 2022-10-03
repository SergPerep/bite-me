import { useEffect, useState } from "react";
import { Categories } from "../types";

const useCategories = () => {
  const [categories, setCategories] = useState<Categories | []>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  return categories;
};

export default useCategories;
