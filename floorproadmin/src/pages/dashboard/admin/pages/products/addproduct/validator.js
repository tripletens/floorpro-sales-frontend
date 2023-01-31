import * as Yup from "yup";

{/* name, quantity, price, image, description, square_meter,category_id, vendor_id */}
export const AddProductValidation = Yup.object({
  name: Yup.string().required("Product name is required"),
  quantity: Yup.string().required("Product quantity is required")
    .min(1, "Quantity must have a minimum of 1 character")
    .test("quantity", "quantity must be a number", (value) => {
      return /\d/.test(value);
    }),
  price: Yup.string().required("Product price is required")
    .min(1, "Price must have a minimum of 1 character")
    .test("price", "price must be a number", (value) => {
      return /\d/.test(value);
    }),
  // image: Yup.string().required("Product image is required"),
  description: Yup.string().required("Product description is required"),
  square_meter: Yup.string().required("Product square meter is required")
    .min(1, "Square meter must have a minimum of 1 character")
    .test("square_meter", "Square meter must be a number", (value) => {
      return /\d/.test(value);
    }),
    category_id: Yup.string().required("Product category is required")
  
});
