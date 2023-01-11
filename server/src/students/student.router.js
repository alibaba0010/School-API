import { Router } from "express";
import {
  getAllStudents,
  getStudentsById,
  createNewStudent,
  deleteStudent,
} from "./students.controller.js";

const studentRouter = Router();

studentRouter.route("/").get(getAllStudents).post(createNewStudent);
studentRouter.route("/:id").get(getStudentsById).delete(deleteStudent);
export default studentRouter;
