import mongoose from "mongoose"
async function  connectToDataBase(){
 try {
  
await mongoose.connect(process.env.DATABASE_URL)
console.log("connected to the database")
  
 } catch (e) {
  console.log("database error", e)
 }
}
export {
 connectToDataBase
}