import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// Connection URI
const { MONGODB_USER, MONGODB_PASSWORD } = process.env;
const uri =
  `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.s0yec.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "biteme";
  // Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db(dbName).command({ ping: 1 });
    console.log("-> Connected to MongoDb");
    const db = client.db(dbName);
    const foods = db.collection("foods");
  } catch(error) {
    console.error(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);