import Nutrients from "./Nutrients";
import Categories from "./Categories";
import { Food } from "../../types";
import { useState } from "react";
import Edit from "../Edit";

const FoodItem = ({
  food,
  categories,
}: {
  food: Food;
  categories: { _id: string; name: string }[];
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleClickFood = () => {
    setIsEditOpen(true);
  };
  return (
    <>
      <div className="food" onClick={handleClickFood}>
        <div className="food__header">
          <span className="food__title">{food.name}</span>
          {food.packageSize && (
            <span className="food__package-size">
              {" "}
              | {food.packageSize} {food.unit}
            </span>
          )}
        </div>
        <Nutrients
          nutrientVals={{
            per: food.nutrition.per,
            fatsNum: food.nutrition.fats,
            carbsNum: food.nutrition.carbohydrates,
            proteinsNum: food.nutrition.proteins,
          }}
        />
        <Categories categories={categories} />
      </div>
      {isEditOpen && (
        <Edit id={food._id} onClickClose={() => setIsEditOpen(false)} />
      )}
    </>
  );
};

export default FoodItem;
