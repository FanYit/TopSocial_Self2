const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const routerIndex = require("./routes/routerIndex");
const handleError = require("./middleWare/errorMiddleware");

app.use("/api", routerIndex);
app.use(handleError);

const PORT = 80;
app.listen(PORT, () => {
  console.log("backend server is running on http://localhost:80");
});
