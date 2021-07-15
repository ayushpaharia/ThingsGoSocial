import { Request, Response } from "express";
import Society from "../model/society.model";
import { findSociety, createSociety } from "../services/society.services";

export async function createSocietyHandler(req: Request, res: Response) {
  try {
    const isSocietyFound = await findSociety(req.body);
    if (isSocietyFound) return res.send({ message: "Society already exists!" });

    const society = await createSociety(req.body);

    return res.send(society.toJSON());
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
export async function getSocietiesHandler(req: Request, res: Response) {
  try {
    const allSocieties = await Society.find();
    return res.status(200).json({ societies: allSocieties });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ error: "Something went Wrong" });
  }
}
