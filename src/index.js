const express = require("express");
const app = express();
const itemRoute = require('./routes/item.route');

const API = "/api";
const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(API, itemRoute);


app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
