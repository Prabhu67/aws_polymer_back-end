const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const projectmodel = require("./models/project");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://arav:QcEl0tg419vOS6rR@cluster0.k1dszd3.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get('/', function (req, res) {
  res.send("Welocme to AWS");
  });
app.get("/getprojects", async (req, res) => {
  const allProjects = await projectmodel.find();
  res.status(200).send({ status: "Success", data: allProjects });
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
