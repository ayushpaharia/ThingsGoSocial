console.clear();

import express from "express";
import config from "config";
import connect from "./db/connect";
// import {} from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use();

app.listen(port, host, async () => {
  console.log(`Server listing at http://${host}:${port}/`);

  await connect();
});
