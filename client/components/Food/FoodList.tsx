import FoodItem from "./FoodItem";
import { Foods } from "../../types";

const FoodList = ({
  foods,
  categories,
}: {
  foods: Foods;
  categories: { _id: string; name: string }[];
}) => {
  return (
    <div className="foods">
      {foods.map((food, index) => {
        const foodCats = food.categories.reduce((result, currId) => {
          const cat = categories.find((category) => category._id === currId);
          if (cat) return [...result, cat];
          return result;
        }, [] as { _id: string; name: string }[]);
        return <FoodItem food={food} key={index} categories={foodCats} />;
      })}
    </div>
  );
};

export default FoodList;
