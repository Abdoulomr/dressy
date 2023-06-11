const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "your-database-name";

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = {
  client,
  dbName,
  connectDB,
};
