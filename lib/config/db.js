import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Pri_Pri:Priyanka@cluster0.bvaomxj.mongodb.net/blogger')
    console.log("DB Connected")
}