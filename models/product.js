const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Relation to User model
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
      type: Schema.Types.Mixed, // Allows both String and Number
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
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
