export type FoodOriginal = {
  name: string;
  state?: string;
  brand?: string;
  categories: string[];
  unit?: "g" | "ml";
  packageSize?: number;
  nutrition: {
    per: "100 g" | "100 ml";
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
    per: "100 g" | "100 ml";
    kcal: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
};
