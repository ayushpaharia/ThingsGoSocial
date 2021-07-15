import { Router } from "express";
import {
  createSubjectHandler,
  getSubjectsHandler,
} from "../controller/subject.controller";
import validateRequest from "../middlewares/validateRequest";
import { createSubjectSchema } from "../schema/subject.schema";

const subjectRoutes: Router = Router();

/**
 * @route   POST /api/subjects
 * @desc    Creates a subject
 */
subjectRoutes.post(
  "/api/subjects",
  validateRequest(createSubjectSchema),
  createSubjectHandler
);

/**
 * @route   GET /api/subjects
 * @desc    Gets all subjects
 */
subjectRoutes.get("/api/subjects", getSubjectsHandler);

export default subjectRoutes;
