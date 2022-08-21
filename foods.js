// import { v4 as uuid } from "uuid";
export let foods = [
  {
    id: "17b6b4a0-5aba-4ad6-8cf8-6820e3687fa0",
    name: "Volle melk",
    brand: "AH",
    nutrition: {
      per: "100ml",
      kCal: 100,
      proteins: 6.4,
      fats: 2,
      carbohydrates: 61,
    },
    packageSize: "224ml",
    portionSize: "24ml",
  },
  {
    id: "68a3072e-f9b3-43ce-8b49-2d5105865d5f",
    name: "Milka Reep alpenmelk",
    brand: "AH",
    nutrition: {
      per: "100g",
      kCal: 532,
      proteins: 6.1,
      fats: 29,
      carbohydrates: 59,
    },
    packageSize: "100g",
  },
];

export const setFoods = (arr) => foods = arr;
