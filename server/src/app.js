import express, { json } from "express";
// import "express-async-errors";
// import orderRouter from "./routes/order.router.js";

// import { errorHandler } from "./errors/error.js";

// import { routeError } from "./errors/route.error.js";


const app = express();
app
  .use(json())
  // .use("/v1", orderRouter)
//   .use(routeError)
//   .use(errorHandler);

export default app;