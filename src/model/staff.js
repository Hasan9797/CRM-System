import { Schema, model } from "mongoose";

const staffSchema = new Schema(
  {
    name: { type: "string", required: true },
    rol: { type: "string", required: true },
    password: { type: "string", required: true },
    phoneNumber: { type: "string", required: true },
  },
  { timestamps: true }
);

export default model("Staff", staffSchema);
