import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: [true, "User is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    field: {
      type: String,
      required: [true, "Field is required"],
    },
    budget: {
      type: Schema.Types.Mixed, 
      required: [true, "Budget is required"],
    },
    region: {
      type: String,
      required: [true, "Region is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
