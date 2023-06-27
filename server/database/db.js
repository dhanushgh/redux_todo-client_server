import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-dyndl2o-shard-00-00.5iajwyg.mongodb.net:27017,ac-dyndl2o-shard-00-01.5iajwyg.mongodb.net:27017,ac-dyndl2o-shard-00-02.5iajwyg.mongodb.net:27017/?ssl=true&replicaSet=atlas-nc69qz-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("error while connecting databse", error.message);
  });
};

export default Connection;
