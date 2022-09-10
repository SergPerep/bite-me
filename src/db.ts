import { MongoClient } from "mongodb";
import { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

// Connection URI
const { MONGODB_USER, MONGODB_PASSWORD } = process.env;
const uri =
  `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.s0yec.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "biteme";
  // Create a new MongoClient
const client = new MongoClient(uri);
const connectToDb = async (app: Express) => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db(dbName).command({ ping: 1 });
    console.log("-> Connected to MongoDb");
    const db = client.db(dbName);
    const foodsColl = db.collection("foods");
    const catColl = db.collection("categories");
    const brandsColl = db.collection("brands");
    app.locals.foodsColl = foodsColl;
    app.locals.catColl = catColl;
    app.locals.brandsColl = brandsColl;
  } catch(error) {
    console.error(error);
    await client.close();
  } 
}

export default connectToDb;