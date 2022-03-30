import { MongoClient } from "mongodb";

export const getConnectionToDb = async () => {
  console.log(process.env.MONGODB_URL);
  return await MongoClient.connect(process.env.MONGODB_URL);
};
