import 'module-alias/register';

import {createServer} from "http";

import services from "@services/index";

import errorHandler from "@middlewares/ErrorHandler/ErrorHandler"

import cors from "@middlewares/cors/cors"

import ApiError from "@classes/ApiError/ApiError"

//EXPRESS
const express = require("express");

const app  = new express();

app.use(cors());

app.use(express.json());

app.use("/api",services)

app.use(errorHandler)

app.use((req,res) => {
  if(!req.route&&!res.headersSent){
    res.status(404).send(new ApiError(404,'This route is not found',true))
  }
})


// SERVER
const server = createServer(app);

server.listen(process.env.PORT);

server.on("listening",()=>{

    console.log(`Server is up and running on port : ${process.env.PORT}`)
})
