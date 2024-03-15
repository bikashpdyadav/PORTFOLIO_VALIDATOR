const express = require("express");
const bodyParser = require("body-parser");
const validator = require("./validateRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", validator);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
