import { object, string } from "yup";

export const createSubjectSchema = object({
  body: object({
    name: string().required("Name is required"),
    type: string().required("Type is required"),
  }),
});
