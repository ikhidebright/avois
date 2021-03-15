import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import dotenv from "dotenv";
import apiRoutes from "./routes/index";

global.__basedir = __dirname;

dotenv.config();

const app = express();

var whitelist = [
  "http://localhost:8080",
  "http://localhost:3000",
  "http://avios.netlify.app",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Blocked!"));
    }
  },
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", cors(corsOptions), apiRoutes);

app.get("/", (request, response) => {
  response.status(200).json({
    status: true,
    message: "Welcome to Avios",
  });
});

app.use((request, response, next) => {
  next(createError.NotFound());
});

app.use((err, request, response, next) => {
  if (
    err.name === "UnauthorizedError" ||
    err.name === "JsonWebTokenError" ||
    err.message === "jwt expired"
  ) {
    response.status(401).send("Please Login to continue");
    return;
  }
  response.status(err.status || 500);
  response.send({
    error: {
      status: err.status || 500,
      message: err.message || "An error occured!",
    },
  });
  return;
});
app.set("x-powered-by", false);

const PORT = process.env.PORT || 5054;

app.listen(PORT, () => {
  console.log(`Server available on port: ${PORT}`);
});
