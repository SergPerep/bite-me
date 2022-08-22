import express from "express";
import { foods, setFoods } from './foods.js';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get all foods
app.get("/foods", (req, res) => {
    res.status(200).json(foods);
});

// Get a food
app.get("/foods/:id", (req, res) => {
    const id = req.params.id;
    const food = foods.find(food => food.id === id);
    res.status(200).json(food);
});

// Get add new food
// app.post("/foods", () => {});

// Update a food
// app.put("/foods/:id", () => {});

// Delete food item
app.delete("/foods/:id", (req, res) => {
    const id = req.params.id;
    const hasFood = foods.find(food => food.id === id);
    if (!hasFood) return res.status(404).json({ message: "No food with such id" });
    const updatedFoods = foods.filter(food => food.id !== id);
    setFoods(updatedFoods);
    res.status(200).json({ message: "Food deleted"});
});

app.listen(PORT, () => {
  console.log(`--> Server is running on port ${PORT}`);
});
