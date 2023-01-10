import { Router } from "express";
import { getAllStudents } from "./students.controller.js";

const studentRouter = Router()

studentRouter.
get("/", getAllStudents)
export default studentRouter