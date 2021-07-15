import { Request, Response } from "express";
import Subject from "../model/subject.model";
import { findSubject, createSubject } from "../services/subject.services";

export async function createSubjectHandler(req: Request, res: Response) {
  try {
    const isSubjectFound = await findSubject(req.body);
    if (isSubjectFound) return res.send({ message: "Subject already exists!" });

    const subject = await createSubject(req.body);

    return res.send(subject.toJSON());
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
export async function getSubjectsHandler(req: Request, res: Response) {
  try {
    const allSubjects = await Subject.find();
    return res.status(200).json({ subjects: allSubjects });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
