import { pool } from "../db.js";
import { StatusCodes } from "http-status-codes";
import {
  getAllStudentsQuery,
  getStudentById,
  checkEmailExists,
  addStudents,
} from "../services/Query.js";

export const getAllStudents = async (req, res) => {
  const students = await pool.query(getAllStudentsQuery);
  if (!students) throw new Error("Unable to get Students");

  return res.status(StatusCodes.OK).json(students.rows);
};

export const getStudentsById = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query(getStudentById, [id], (error, student) => {
    if (error) throw error;

    return res.status(StatusCodes.OK).json(student.rows);
  });
};
export const createNewStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;
  // check if email exists
  const checkEmail = await pool.query(checkEmailExists, [email]);
  console.log(checkEmail.rows.length);
  if (checkEmail.rows.length) res.json({ error: "Email Already exits" });
  const student = await pool.query(addStudents, [name, email, age, dob]);
  return res
    .status(StatusCodes.CREATED)
    .json({ msg: "Student Created Successfully" });
};
