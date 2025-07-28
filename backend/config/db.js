import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://nikitasawant243:mymilkfarm@cluster0.7kn2iug.mongodb.net/mymilkfarm').then(()=>console.log("DB connected"));
}