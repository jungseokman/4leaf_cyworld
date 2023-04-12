const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const cyworldRouter = require("./routers/cyworldRouter");

const app = express();
const PORT = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/cyworld", cyworldRouter);

app.listen(PORT, () => {
  console.log(`CYWORLD BACKEND : ${PORT} REST API SERVER START!`);
});
