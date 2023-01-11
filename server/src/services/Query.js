export const getAllStudentsQuery = "SELECT * FROM students";

export const getStudentById = "SELECT * FROM students WHERE id = $1";

export const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

export const addStudents =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

export const deleteStudentByID = "DELETE FROM students WHERE id = $1;";

export const updateStudentById = "UPDATE students SET name = $1 WHERE id = $2 ";
