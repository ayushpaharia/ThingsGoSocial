import { DocumentDefinition, FilterQuery } from "mongoose";
import Society, { SocietyDocument } from "../model/society.model";

export async function createSociety(
  input: DocumentDefinition<SocietyDocument>
) {
  try {
    return await Society.create(input);
  } catch (err) {
    throw new Error(err);
  }
}

export async function findSociety(query: FilterQuery<SocietyDocument>) {
  try {
    return await Society.findOne({ name: query.name }).lean();
  } catch (err) {
    throw new Error(err);
  }
}

export function getSocietys() {
  try {
    return Society.find().lean();
  } catch (err) {
    throw new Error(err);
  }
}
