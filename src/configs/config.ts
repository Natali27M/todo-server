import { config } from "dotenv";

config();

export const configs = {
  DB_URI: process.env.DB_URI || "mongodb://127.0.0.1:27017",
  DB_NAME: process.env.DB_NAME || "ToDo",
  DB_CONNECT_TIMEOUT: process.env.DB_CONNECT_TIMEOUT || 20000,
  PORT: process.env.PORT || 5001,
};
