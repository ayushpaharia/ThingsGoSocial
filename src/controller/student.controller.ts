import { Request, Response } from "express";
import { omit } from "lodash";
import { ObjectId } from "mongoose";
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

export async function selectSubjectsHandler(req: Request, res: Response) {
  const { subjects } = req.body;
  const { studentId } = req.params;
  try {
    const subjectArray = await Subject.find({
      $or: subjects.map((subject: any) => ({ name: subject.name })),
    }).select("students name type");

    const student = await Student.findById(studentId);
    if (!student) return res.status(200).json({ error: "Student not found" });

    student.subjects = subjectArray;
    await student.save();

    subjectArray.map((subject) => {
      return (subject.students = [
        ...subject.students.filter((student) => student === studentId),
        studentId,
      ]);
    });
    subjectArray.forEach((subject) => subject.save());
    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}

export async function selectSocietyHandler(req: Request, res: Response) {
  const { societies } = req.body;
  const { studentId } = req.params;
  try {
    const societyArray = await Society.find({
      $or: societies.map((society: SocietyDocument) => ({
        name: society.name,
      })),
    }).select("name type details students");

    const student = await Student.findById(studentId);
    if (!student) return res.status(200).json({ error: "Student not found" });

    student.societies = societyArray;

    await student.save();

    societyArray.map((society) => {
      return (society.students = [
        ...society.students.filter((id: string) => id === studentId),
        studentId,
      ]);
    });
    societyArray.forEach((society) => society.save());

    return res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
