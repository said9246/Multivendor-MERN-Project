const app=require("./app")
const path = require('path');
const dotenv=require("dotenv");
const cloudinary = require("cloudinary");

const connectDatabase = require("./db/Database");
dotenv.config({ path:"config/.env" });

const port =process.env.PORT || 3000


connectDatabase()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})




const server=app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})


process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down server due to unhandled promise rejection");
    server.close(() => {
      process.exit(1);
    });
  });