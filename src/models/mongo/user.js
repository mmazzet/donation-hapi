import { Schema, model } from "mongoose";
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
export const UserMongoose = model("User", userSchema);
