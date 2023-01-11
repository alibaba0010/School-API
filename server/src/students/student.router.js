import { Router } from "express";
import {
  getAllStudents,
  getStudentsById,
  createNewStudent,
  deleteStudent,
  updateStudent,
} from "./students.controller.js";

const studentRouter = Router();

studentRouter.route("/").get(getAllStudents).post(createNewStudent);
studentRouter
  .route("/:id")
  .get(getStudentsById)
  .delete(deleteStudent)
  .patch(updateStudent);
export default studentRouter;
