import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql";

const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://admin:admin123@ds153593.mlab.com:53593/rau_sasch";

// Connect to MongoDB with Mongoose.
  var connection = mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("MongoDB connected")
  })
  .catch(err => console.log(err));

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));