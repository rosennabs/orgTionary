const express = require("express");
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // Use dynamic port in production, fallback to 8080 for local

const server = express();

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3000", // local frontend
      process.env.NEXT_PUBLIC_FRONTEND_URL, // Production frontend
    ];
    
    // Check if origin is allowed
    if (
      !origin || // Allow requests without an origin (e.g., server-to-server)
      allowedOrigins.includes(origin) || // Exact match
      origin.startsWith("https://orgtionary-frontend")// Starts with "orgtionary"
    ) {
      callback(null, true); // Allow the request
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS")); // Reject the request
    }
  },
  methods: "GET,POST,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"], // Add other headers as needed
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