import mongoose from "mongoose";
import { StudentDocument } from "./student.model";

export interface SubjectDocument extends mongoose.Document {
  name: string;
  type: string;
  students: Array<StudentDocument["_id"]>;
}

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Subject = mongoose.model<SubjectDocument>("Subject", SubjectSchema);

export default Subject;
