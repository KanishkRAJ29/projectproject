import mongoose from "mongoose";

export const dbConnections=()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"Volunteering_Project"
  }).then(()=>{
    console.log("Connected to DataBase")
  }).catch(error=>{
    console.log("some error occured connecting db ",error)
  });
}