import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbname: 'user'
        })
        console.log('mongo connecte')
    } catch (error) {
        console.log(error)
    }
}