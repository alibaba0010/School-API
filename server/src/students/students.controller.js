import { pool } from "../db.js";
import { StatusCodes } from "http-status-codes";

export const getAllStudents = async (req, res) => {
  await pool.query("SELECT * FROM students", (error, results) => {
    if (error) throw error;

    return res.status(StatusCodes.OK).json({ students });
  });
};
