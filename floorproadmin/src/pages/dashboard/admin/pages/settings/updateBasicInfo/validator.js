import * as Yup from "yup";

{/* user_id, name, username, status, department_id, gender,dob, role */}
export const UpdateBasicInfoValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of Birth is required"),
  role: Yup.string().required("Role is required"),
  department_id: Yup.string().required("Department is required"),
  status: Yup.string().required("Status is required")
});
