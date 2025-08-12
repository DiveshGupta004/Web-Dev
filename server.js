//REQUIRE OR IMPORT ALL THE MODULES HERE ONLY
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRouter = require("./routes/userRoute");
const profileRouter = require("./routes/profileRoute");
const projectRouter = require("./routes/projectRoute");

//SET INSTANCES HERE ONLY
const app = express();



//VARIABLE DECLARATION HERE ONLY
const PORT = process.env.PORT || 4888;


// I WANT TO RUN A MIDDLEWARE
app.use(express.json());

//WE WILLL MAKE ROUTES
app.use("/api/user",userRouter)
app.use("/api/profile",profileRouter)
app.use("/api/project", projectRouter);


dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});