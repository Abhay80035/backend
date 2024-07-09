import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://abhaypatel80035:<password>@abhay.gweiqlq.mongodb.net/?retryWrites=true&w=majority&appName=abhay.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
