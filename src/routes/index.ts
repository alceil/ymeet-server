import express from "express";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { NewMeet } from "./newMeet";
import { GetMeet } from "./getMeet";

const Router = express.Router();

Router.post("/signIn", SignIn);
Router.post("/signUp", SignUp);
Router.post("/newMeet", NewMeet);
Router.post("/getMeet", GetMeet);
export default Router;
