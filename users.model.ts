import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  _id: { type: String, required: true },
  uid: { type: String, index: true },
  username: { type: String, index: true },
  first_name: { type: String },
  last_name: { type: String },
  gender: { type: String },
  works_at: { type: String },
  studied_at: { type: String },
  lives_in: { type: String },
  from: { type: String },
  relationship_status: { type: String },
});

export default model("users", usersSchema);
