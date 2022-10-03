import { useEffect, useState } from "react";
import { Category } from "../types";
const useCategory = (id: string) => {
  const [category, setCategory] = useState<Category | null>(null);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/categories/${id}`);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, [id]);
  return category;
};

export default useCategory;
