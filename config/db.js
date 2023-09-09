import mongoose from "mongoose";
import colors from "colors"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_url);
        console.log(`connected to mongodb database ${conn.connection.host}`.bgRed);
    } catch (error) {
        console.log(`error in mongodb ${error}`.bgRed)
    }
};

export default connectDB;