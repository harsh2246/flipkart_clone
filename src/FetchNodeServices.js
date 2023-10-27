import axios from "axios";
var ServerURL="http://localhost:5000";
const authenticateSignup=async(URL)=>{
 try{
    const response = await axios.post(`${ServerURL}/signup`, body);
    return response.data
 }
 catch(err){
    console.log("error while calling sigining up api",err)
 }
}
const authenticateSignin=async(URL)=>{
    try{
       const response = await axios.get(`${ServerURL}/signin`, body);
       return response.data
    }
    catch(err){
       console.log("error while calling sigining up api",err)
    }
   }
