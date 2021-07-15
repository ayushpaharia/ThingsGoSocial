import { Request, Response } from "express";
import { omit } from "lodash";
import Society, { SocietyDocument } from "../model/society.model";
import Student from "../model/student.model";
import Subject, { SubjectDocument } from "../model/subject.model";
import {
  createStudent,
  findStudent,
  getStudents,
} from "../services/student.services";

export async function createStudentHandler(req: Request, res: Response) {
  try {
    const isStudentFound = await findStudent(req.body);
    if (isStudentFound)
      return res.send({ message: "Student with this email already exists!" });

    const student = await createStudent(req.body);

    return res.send(omit(student.toJSON(), "password"));
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}

export async function getStudentsHandler(req: Request, res: Response) {
  try {
    const students = await getStudents();
    return res.status(200).json({ students });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}

export async function selectSocietyHandler(req: Request, res: Response) {
  const { societies } = req.body;
  const { studentId } = req.params;
  try {
    const SocietyArray = await Society.find({
      $or: societies.map((subject: SocietyDocument) => ({
        name: subject.name,
      })),
    });

    const student = await Student.findById(studentId);
    if (!student) return res.status(200).json({ error: "Student not found" });
    console.log(SocietyArray);

    student.societies = SocietyArray;

    await student.save();
    return res.status(200).json({ student, SocietyArray });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}

export async function selectSubjectsHandler(req: Request, res: Response) {
  const { subjects } = req.body;
  const { studentId } = req.params;
  try {
    const subjectArray = await Subject.find({
      $or: subjects.map((subject: any) => ({ name: subject.name })),
    });

    const student = await Student.findById(studentId);
    if (!student) return res.status(200).json({ error: "Student not found" });

    console.log(subjectArray);

    student.subjects = subjectArray;
    await student.save();

    subjectArray.map(
      (subject) => (subject.students = [...subject.students, studentId])
    );
    await subjectArray.forEach((subject) => subject.save());
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
