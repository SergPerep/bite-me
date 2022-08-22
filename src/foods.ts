// import { v4 as uuid } from "uuid";

type Food = {
  id: string,
  name: {
    nl?: string,
    en?: string
  },
  brands: string[],
  productType: string[],
  nutrition: {
    per: string,
    kCal: number,
    proteins: number,
    fats: number,
    carbohydrates: number,
  },
  packageSize: {
    value: number,
    unit: "ml" | "g"
  },
  portionSize?: {
    value: number,
    unit: "ml" | "g"
  }
}

type Foods = Food[];

export let foods:Foods = [
  {
    id: "17b6b4a0-5aba-4ad6-8cf8-6820e3687fa0",
    name: {
      nl:"Volle melk"
    },
    brands: ["AH"],
    productType: ["Milk"],
    nutrition: {
      per: "100ml",
      kCal: 100,
      proteins: 6.4,
      fats: 2,
      carbohydrates: 61,
    },
    packageSize: {
      value: 224,
      unit: "ml"
    },
    portionSize: {
      value: 24,
      unit: "ml"
    },
  },
  {
    id: "68a3072e-f9b3-43ce-8b49-2d5105865d5f",
    name: {
      nl: "Milka Reep alpenmelk"
    },
    brands: [ "Milka", "Oreo" ],
    productType: [ "Chocolate" ],
    nutrition: {
      per: "100g",
      kCal: 532,
      proteins: 6.1,
      fats: 29,
      carbohydrates: 59,
    },
    packageSize: {
      value: 100,
      unit: "g"
    },
  },
];

export const setFoods = (arr:Foods) => foods = arr;
