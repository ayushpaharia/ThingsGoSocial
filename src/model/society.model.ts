import mongoose from "mongoose";

export interface SocietyDocument extends mongoose.Document {
  name: string;
  type: string;
  details: string;
}

const SocietySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Society = mongoose.model<SocietyDocument>("Society", SocietySchema);

export default Society;
