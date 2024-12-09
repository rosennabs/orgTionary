const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // Use dynamic port in production, fallback to 8080 for local

const server = express();

// Middleware
server.use(cors());
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