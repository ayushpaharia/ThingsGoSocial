import { object, string } from "yup";

export const createSocietySchema = object({
  body: object({
    name: string().required("Name is required"),
    type: string().required("Type is required"),
    details: string().required("Details are required"),
  }),
});
