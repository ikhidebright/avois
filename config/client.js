import dotenv from "dotenv";
dotenv.config();

export default {
  clientUrl: process.env.clientUrl,
  api: process.env.apiURL
};
