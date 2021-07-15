import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { SubjectDocument } from "./subject.model";
import { SocietyDocument } from "./society.model";

export interface StudentDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  subjects: Array<SubjectDocument["_id"]>;
  societies: Array<SocietyDocument["_id"]>;
  class: string;
  contact: number;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const StudentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    password: { type: String, required: true },
    societies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Society" }],
    contact: { type: Number, required: true },
    class: { type: String, required: true },
  },
  { timestamps: true }
);

StudentSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let student = this as StudentDocument;

  // hash pass if modified or new
  if (!student.isModified("password")) return next();

  // additional data
  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

  const hash = bcrypt.hashSync(student.password, salt);

  // Replace password with hash
  student.password = hash;
  return next();
});

StudentSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as StudentDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const Student = mongoose.model<StudentDocument>("Student", StudentSchema);

export default Student;
