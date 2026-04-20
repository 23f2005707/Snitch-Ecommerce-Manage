import mongoose from "mongoose"
import { config } from "./config.js";

const connectToDB = async() => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Database connected")
    }
    catch(err) {
        console.log("DB connection error: ", err);
    }
}

export default connectToDB;