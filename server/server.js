const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const route = require("./connect");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", route);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
