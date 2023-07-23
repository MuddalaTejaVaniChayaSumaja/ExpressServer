var express=require("express");
const app=express();
const port=1155;

app.get("/",(req,res)=>{
    res.send("Hey! Have a nice day..... Keep Smiling.....");
});
app.listen(port,()=>{
    console.log(`It is running on ${port}`);
});