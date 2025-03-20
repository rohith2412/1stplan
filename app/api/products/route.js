import { connectDB } from "../../../utils/database";
import Product from '../../../models/product';

export async function POST(req) {
  try {
    const { name, email, budget,field, region, description, user } = await req.json();
    
    await connectDB();

    const product = new Product({
      user,  
      name,
      field,
      email,
      budget,
      region,
      description,
    });

    await product.save();

    return new Response(JSON.stringify({ message: "Product added successfully!" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    return new Response(JSON.stringify({ message: "Error saving product" }), {
      status: 500,
    });
  }
}
