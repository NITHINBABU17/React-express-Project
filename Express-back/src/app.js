const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
