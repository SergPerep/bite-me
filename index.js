import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get all foods
app.get("/foods", () => {

});

// Get a food
app.get("/foods/:id", () => {

});

// Get add new food
app.post("/foods", () => {

})

// Update a food
app.put("/foods/:id", () => {

})

// Delete food item
app.delete("/foods/:id", () => {

});

app.listen(PORT, () => {
    console.log(`--> Server is running on port ${PORT}`)
})