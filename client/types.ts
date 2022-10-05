export type Food = {
  id: string;
  name: string;
  state?: string;
  brand?: {
    id: string;
    name: string;
  };
  categories: {
    id: string;
    name: string;
  }[];
  unit: "g" | "ml";
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

export type Category = { id: string; name: string };
export type Categories = Category[];
