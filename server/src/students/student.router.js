import { Router } from "express";
import {
  getAllStudents,
  getStudentsById,
  createNewStudent,
} from "./students.controller.js";

const studentRouter = Router();

studentRouter.route("/").get(getAllStudents).post(createNewStudent);
studentRouter.get("/:id", getStudentsById);
export default studentRouter;
