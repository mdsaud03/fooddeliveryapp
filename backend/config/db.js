import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://msaud:saud8973@cluster0.0u7wp.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}