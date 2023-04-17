import * as Yup from "yup";

export const UpdateSocialInfoValidation = Yup.object({
  whatsapp: Yup.string().required("Whatsapp number is required"),
  twitter: Yup.string().required("Twitter username is required"),
  instagram: Yup.string().required("Instagram username is required"),
  facebook: Yup.string().required("Facebook username is required"),
});
