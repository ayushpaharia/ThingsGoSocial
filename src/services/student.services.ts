import { DocumentDefinition, FilterQuery } from "mongoose";
import Student, { StudentDocument } from "../model/student.model";

export async function createStudent(
  input: DocumentDefinition<StudentDocument>
) {
  try {
    return await Student.create(input);
  } catch (err) {
    throw new Error(err);
  }
}

export async function findStudent(query: FilterQuery<StudentDocument>) {
  try {
    return await Student.findOne({ email: query.email }).lean();
  } catch (err) {
    throw new Error(err);
  }
}

export function getStudents() {
  try {
    return Student.find().lean();
  } catch (err) {
    throw new Error(err);
  }
}
