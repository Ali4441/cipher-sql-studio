const express = require("express");
const cors = require("cors");

const app = express();
const assignmentsRouter = require("./routes/assignments");

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", assignmentsRouter);

const PORT = 5000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server failed to start", error);
  }
};

startServer();