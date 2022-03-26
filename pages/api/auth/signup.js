import { hashPassword } from "../../../lib/auth";
import { getConnectionToDb } from "../../../lib/db";

export default async (req, res) => {
  const { email, password } = req.body;
  if (!email || !email.includes("@") || !password || password.trim().length < 3) {
    res.status(422).json({ message: "Invaid email or password" });
  }
  const { insertedId } = await (
    await getConnectionToDb()
  )
    .db()
    .collection("users")
    .insertOne({ email, password: hashPassword(password) });
  res.status(200).json({ message: "Successfully create user", data: { email, password, id: insertedId } });
};
