import mongoose from "mongoose";

const url =
  "mongodb+srv://tiagosousatams_db_user:yvYeB5YulsZtxCZs@cluster0.o3hctwe.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0";

//connect to mongodb database

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    await mongoose.connect(`${url}`);
  } catch (error) {
    console.log(`Error on MongoDB: ${error.message}`);
  }
};

export default connectDB;
