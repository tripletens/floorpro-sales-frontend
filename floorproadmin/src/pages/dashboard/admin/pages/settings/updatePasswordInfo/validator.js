import * as Yup from "yup";

export const UpdatePasswordInfoValidation = Yup.object({
  old_password: Yup.string().required("Old Password is required"),
  new_password: Yup.string().required("New Password is required"),
  confirm_password: Yup.string().required("Please confirm your new password"),
});
