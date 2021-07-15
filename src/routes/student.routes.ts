import { Router } from "express";
import {
  createStudentHandler,
  getStudentsHandler,
  selectSubjectsHandler,
  selectSocietyHandler,
} from "../controller/student.controller";
import validateRequest from "../middlewares/validateRequest";
import { createStudentSchema } from "../schema/student.schema";

const userRoutes: Router = Router();

/**
 * @route   POST /api/students
 * @desc    Registers student
 */
userRoutes.post(
  "/api/students",
  validateRequest(createStudentSchema),
  createStudentHandler
);

/**
 * @route   GET /api/students
 * @desc    Gets a students
 */
userRoutes.get("/api/students", getStudentsHandler);

/**
 * @route   POST /api/students/add_subjects/:studentId
 * @desc    Adds subjects for student
 */
userRoutes.post("/api/students/add_subjects/:studentId", selectSubjectsHandler);

/**
 * @route   POST /api/students/:studentId
 * @desc    Adds societies for student
 */
userRoutes.post("/api/students/add_societies/:studentId", selectSocietyHandler);

export default userRoutes;
