const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // Use dynamic port in production, fallback to 8080 for local

const server = express();

const corsOptions = {
  origin: function (origin, callback) {
    console.log("CORS Middleware Invoked");

    const allowedOrigins = [
      "http://localhost:3000", // local frontend
      process.env.NEXT_PUBLIC_FRONTEND_URL ||
        "https://orgtionary-frontend.vercel.app", // Production frontend
    ];
    console.log("Allowed Origins:", allowedOrigins);

    // Allow Vercel preview URLs dynamically
    const isVercelPreview = origin && origin.endsWith(".vercel.app");

    // Check if origin is allowed
    if (!origin || allowedOrigins.includes(origin) || isVercelPreview) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS")); // Reject the request
    }
  },
  methods: "GET,POST,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"] // Add other headers as needed
};
 

// Middleware
server.use(cors(corsOptions));

// Temporary Middleware to Manually Set CORS Headers
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins (temporary fix)
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Explicitly handle preflight OPTIONS requests
server.options("*", cors(corsOptions));

server.use(bodyParser.json());

// Mount your routes
server.use('/api', require('./routes/glossaryRoute'));
server.use('/api', require('./routes/formRoute'));

// Handle other requests (Next.js)
server.get("*", (req, res) => {
  res.status(404).send("Route not found"); // Placeholder if Next.js handler is not present
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});