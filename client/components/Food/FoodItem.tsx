import Nutrients from "./Nutrients";
import Categories from "./Categories";
import { Food } from "../../types";
import { useState } from "react";
import Edit from "../Edit";

const FoodItem = ({ food }: { food: Food }) => {
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
          unit={food.unit}
        />
        <Categories categories={food.categories} />
      </div>
      {isEditOpen && (
        <Edit id={food.id} onClickClose={() => setIsEditOpen(false)} />
      )}
    </>
  );
};

export default FoodItem;
