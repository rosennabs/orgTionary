const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // Use dynamic port in production, fallback to 8080 for local

const server = express();

const corsOptions = {
  origin: [
    "http://localhost:3000", // Allow requests from the local development frontend
    "https://orgtionary-frontend.vercel.app", // Allow requests from the deployed production frontend
  ],
  methods: "GET,POST,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"], // Add headers as needed
};

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