import mongoose, { model } from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
  adminFirstName: {
    type: String,
    required: true,
  },
  adminLastName: {
    type: String,
    required: true,
  },
  adminPhoneNumber: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("adminPassword")) {
    next();
  }

  this.adminPassword = await bcrypt.hash(this.adminPassword, 10);
});

export default mongoose.models?.Admin || mongoose.model("Admin", adminSchema);
