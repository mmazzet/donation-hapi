import { Schema, model } from "mongoose";
const candidateSchema = new Schema({
    firstName: String,
    lastName: String,
    office: String,
});
export const CandidateMongoose = model("Candidate", candidateSchema);
