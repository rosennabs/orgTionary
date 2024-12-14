const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // Use dynamic port in production, fallback to 8080 for local

const server = express();

const corsOptions = {
  origin: [
    "http://localhost:3000", // Allow requests from the local development frontend
    process.env.NEXT_PUBLIC_FRONTEND_URL, // Allow requests from the deployed production frontend
  ],
  methods: "GET,POST,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"], // Add other headers as needed
};

console.log("CORS Origins:", corsOptions.origin);

// Middleware
server.use(cors(corsOptions));

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