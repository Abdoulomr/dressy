import mongoose from "mongoose";

async function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Arrête l'application en cas d'erreur de connexion
  }
}

export default dbConnect;
