import * as Yup from "yup";

export const UpdateContactInfoValidation = Yup.object({
  phone: Yup.string().required("Phone Number is required"),
  home_address: Yup.string().required("Home Address is required"),
  postal_code: Yup.string().required("Postal Code is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

// {
//   "user_id" : 1,
//   "phone" : "090182938483",
//   "home_address" : "esiri crescent onikanga",
//   "postal_code": "234234",
//   "city" : "ayobo",
//   "state": "lagos",
//   "country" : "Nigeria"
// }
