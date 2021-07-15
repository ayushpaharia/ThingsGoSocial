import { DocumentDefinition, FilterQuery } from "mongoose";
import Subject, { SubjectDocument } from "../model/subject.model";

export async function createSubject(
  input: DocumentDefinition<SubjectDocument>
) {
  try {
    return await Subject.create(input);
  } catch (err) {
    throw new Error(err);
  }
}

export async function findSubject(query: FilterQuery<SubjectDocument>) {
  try {
    return await Subject.findOne({ name: query.name }).lean();
  } catch (err) {
    throw new Error(err);
  }
}

export function getSubjects() {
  try {
    return Subject.find().lean();
  } catch (err) {
    throw new Error(err);
  }
}
