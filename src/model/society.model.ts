import mongoose from "mongoose";
import { StudentDocument } from "./student.model";

export interface SocietyDocument extends mongoose.Document {
  name: string;
  type: string;
  details: string;
  students: Array<StudentDocument["_id"]>;
}

const SocietySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Society = mongoose.model<SocietyDocument>("Society", SocietySchema);

export default Society;
