// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://Vborges12:CGyDHdKjkPuGW1hN@cluster0.9y3hx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
