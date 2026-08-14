// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URI;

if (!URL) {
  throw new Error("MONGODB_URI não foi configurada.");
}

const client = new MongoClient(URL);

await client.connect();

export const db = client.db("spotifyAula");

console.log("MongoDB conectado com sucesso.");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
