const express = require("express");
const path = require("path");
const app = express();
const port = 2000;
const userRouter = require("./routers/userRouter");
const productRouters = require("./routers/productRouters");
const utilRouter = require("./routers/util");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouters);
app.use("/util", utilRouter);

app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("response from backend");
});

app.listen(port, () => {
  console.log("server started");
});
