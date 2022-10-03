export type FoodOriginal = {
  name: string;
  state?: string;
  brand?: string;
  categories: string[];
  unit?: "g" | "ml";
  packageSize?: number;
  nutrition: {
    kcal: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
};

export type FoodFinal = {
  name: string;
  state?: string;
  brand?: string;
  categories?: string[];
  unit?: "g" | "ml";
  packageSize?: number;
  nutrition: {
    kcal: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
};
