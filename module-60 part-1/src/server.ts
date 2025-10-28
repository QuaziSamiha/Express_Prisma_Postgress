import type { Server } from "http";
import app from "./app.js";

const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log("app is listening on port", port);
  });
}

main();

// ? ============= V2 ===================
// import app from "./app.js";

// const port = 5000;

// app.listen(port, () => {
//   console.log("app is listening on port", port);
// });

// ? ============= V1 ===================

// import express from "express";

// const app = express();
// const port = 5000;

// app.listen(port, () => {
//   console.log("app is listening on port", port);
// });
