import mongoose from "mongoose";


export const connectDatabase = () => {
    let DB_URI = process.env.DB_LOCAL_URI;

    if(process.env.NODE_ENV === "development") DB_URI = process.env.DB_LOCAL_URI;
    if(process.env.NODE_ENV === "production") DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI).then((con) =>{
        console.log(`MongoDB Database connected with HOST: ${con?.connection?.host}`)
    })
}