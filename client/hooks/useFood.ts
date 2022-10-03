import { useEffect, useState } from "react";
import { Food } from "../types";
const useFood = (id: string) => {
  const [food, setFood] = useState<Food | null>(null);
  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(`http://localhost:5000/foods/${id}`);
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFood();
  }, [id]);
  return food;
};

export default useFood;
