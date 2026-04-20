import dotenv from "dotenv" 
dotenv.config()

// mongo uri not exists -> stop server
if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined is environment variables")
}

// JWT SECRET not exist 
if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables")
}


export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}