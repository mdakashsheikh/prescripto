// import mongoose from 'mongoose';

// const connectDB = async() => {
//     mongoose.connection.on('connected', () => {
//         console.log('Database Connected')
//     })
//     await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`)

// }

import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`)
        console.log('Database Connected Successfully!')
    } catch (error) {
        console.log(`MongoDB Server Error ${error}`)
    }
}

export default connectDB;