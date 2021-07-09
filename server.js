require("dotenv").config();
const express = require("express");
const app = express();
const CustomerRoutes = require("./api/routes/customerRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", CustomerRoutes);
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
