import express from "express";
import http from "http";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import Routes from "./routes";
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI;


// connect to mongoDB
mongoose.connect(MONGO_URI??"", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: true,
} as ConnectOptions);


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;


// POST request body json parser
app.use(express.json());
// routes for REST API
app.use(Routes);
// cors
app.use(cors());

app.get("/", (_req,res) => {
  res.send("Server is up and running");
});



// server listen to port
server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
