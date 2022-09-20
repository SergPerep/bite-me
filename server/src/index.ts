import app from "./app";
import connectToDb from "./db";
import dotenv from "dotenv";
dotenv.config();

const { PORT = 5000 } = process.env;

app.listen(PORT, async() => {
  console.log(`-> Server is running on ${PORT}`);
  await connectToDb(app);
});
