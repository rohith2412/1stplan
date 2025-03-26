export async function POST(req, res) {
    const strip = process.env.STRIPE_SECRET_KEY

    const payment = await strip.checkout.session.create({
        
    })
}