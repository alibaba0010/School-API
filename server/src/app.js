import express, { json } from "express";
import studentRouter from "./students/student.router.js";


const app = express();
app.use(json()).use("/api/v1/students", studentRouter);
//   .use(routeError)
//   .use(errorHandler);

export default app;
