import express from "express";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

const Router = express.Router();

Router.post("/signIn", SignIn);
Router.post("/signUp", SignUp);

export default Router;
