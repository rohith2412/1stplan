import { connectDB } from '../../../utils/database';
import Product from '../../../models/product';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  await connectDB();

  try {
    const products = await Product.find({ user: userId }).lean();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch products', { status: 500 });
  }
}
