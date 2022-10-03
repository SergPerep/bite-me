import { useState, useEffect } from "react";
const useFoods = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/foods");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return products;
};

export default useFoods;
