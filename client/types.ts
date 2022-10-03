export type Food = {
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

export type Foods = Food[];

export type Category = { _id: string; name: string };
export type Categories = Category[];
