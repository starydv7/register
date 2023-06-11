import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect to databse ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB  ${error}`);
  }
};
export default connectDB;
