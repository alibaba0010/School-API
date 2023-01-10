import express, { json } from "express";
// import "express-async-errors";
import studentRouter from "./students/student.router.js";
// import { errorHandler } from "./errors/error.js";

// import { routeError } from "./errors/route.error.js";

const app = express();
app.use(json()).use("/api/v1/students", studentRouter);
//   .use(routeError)
//   .use(errorHandler);

export default app;
