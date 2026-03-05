import Express = require("express");
import {identifyRouter } from "./routes/identifyRouter";
const app = Express();

app.use(Express.json());

app.use("/identify", identifyRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});