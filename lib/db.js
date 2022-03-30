import { MongoClient } from "mongodb";

export const getConnectionToDb = async () => {
  console.log(process.env.MONGODB_URL);
  return await MongoClient.connect(process.env.MONGODB_URL);
};

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://maximilian:ZbJcz3dJ88LSUMlM@cluster0.ntrwp.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
}
