import { Router } from "express";
import {
  createSocietyHandler,
  getSocietiesHandler,
} from "../controller/society.controller";
import validateRequest from "../middlewares/validateRequest";
import { createSocietySchema } from "../schema/society.schema";

const subjectRoutes: Router = Router();

/**
 * @route   POST /api/societies
 * @desc    Creates a subject
 */
subjectRoutes.post(
  "/api/societies",
  validateRequest(createSocietySchema),
  createSocietyHandler
);

/**
 * @route   GET /api/societies
 * @desc    Gets all societies
 */
subjectRoutes.get("/api/societies", getSocietiesHandler);

export default subjectRoutes;
