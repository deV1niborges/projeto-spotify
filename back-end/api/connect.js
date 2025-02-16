// Javacript Assincrono
// await async
// Fullfilled

import { MongoClient } from "mongodb";

const URl =
  "mongodb+srv://Vborges12:ltgP1jfMsHm7NGfn@cluster0.9y3hx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URl);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
