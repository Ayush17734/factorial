let express = require("express");
let cors = require ("cors");
let app = express();
app.use(cors());
app.get("/ping",(req,res)=>res.send("Enter A number "));
app.get("/num",(req,res)=>{
    let str = req.query.number;
    let n=parseInt(str);
    let fact =1 ;
    for(let i=1 ;i<=n;i++)
    {
        fact=fact*i;

    }
    res.send(`Factorial is ${fact}`)
});
app.listen(9000,()=>console.log("Express is ready"));