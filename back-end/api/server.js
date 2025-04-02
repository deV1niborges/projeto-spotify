// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware

// import express from "express";
// import cors from "cors";
// import { db } from "./connect.js";
// import path from "path";

// const __dirname = path.resolve();

// const app = express();
// const PORT = 3000;

// app.use(cors());
// // app.use(express.json());

// app.get("/api/", (request, response) => {
//   response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
// });

// app.get("/api/artists", async (request, response) => {
//   response.send(await db.collection("artists").find({}).toArray());
// });

// app.get("/api/songs", async (request, response) => {
//   response.send(await db.collection("songs").find({}).toArray());
// });

// app.use(express.static(path.join(__dirname, "../front-end/dist")));

// app.get("*", async (request, response) => {
//   response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Servidor está escutando na porta ${PORT}`);
// });

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Descomentado

// API Routes
app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response, next) => {
  try {
    response.send(await db.collection("artists").find({}).toArray());
  } catch (err) {
    next(err);
  }
});

app.get("/api/songs", async (request, response, next) => {
  try {
    response.send(await db.collection("songs").find({}).toArray());
  } catch (err) {
    next(err);
  }
});

// Static files
app.use(express.static(path.join(__dirname, "../front-end/dist")));

// Front-end catch-all (modified to avoid API conflicts)
app.get(/^\/(?!api).*/, (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo quebrou!');
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});