import express from "express";
import http from "http";

// import mongoose from "mongoose";


// const MONGO_URI = process.env.MONGO_URI;

// // connect to mongoDB
// mongoose.connect(MONGO_URI || "mongodb://localhost:27017/trio-calls", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: true,
// });

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;


app.get("/", (_req,res) => {
  res.send("Server is up and running");
});



// server listen to port
server.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
