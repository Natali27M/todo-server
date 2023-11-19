import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { User } from "./models/Users.model";

const app = express();

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

app.listen(5500, async () => {
  try {
    await mongoose
      .connect(configs.DB_URI as string, {
        dbName: configs.DB_NAME as string,
        connectTimeoutMS: configs.DB_CONNECT_TIMEOUT as number,
      })
      .then(() => {
        console.log("Connecting to DB...");
      });
  } catch (e) {
    console.error(e);
  }
  console.log(`Serves has started on PORT: ${configs.PORT}`);
  // console.log('Server has started🚀🚀🚀');
});
