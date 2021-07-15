import { object, string, ref, array } from "yup";

export const createStudentSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password is too short - shoyld be 8 characters or longer")
      .matches(
        /^[a-zA-Z0-9._-]*$/,
        "Password can only contain alphabets, numbers , underscore, period and dash"
      ),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
    class: string()
      .required("Class is required")
      .matches(/^[0-1][0-9][A-Z]$/, "Class not Valid"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
    subjects: array().required("subjects are required"),
    societies: array(),
  }),
});
