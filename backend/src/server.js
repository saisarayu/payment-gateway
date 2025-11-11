// src/server.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"; 

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    // Start the server after DB connects
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  
  .catch((err) => {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1);
  });
