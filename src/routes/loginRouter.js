const express=require('express')
const loginRouter=express.Router()

loginRouter.post('/login', function (req, res) {
    const data={
     name:req.body.UserName,
     password:req.body.Password
    }
    console.log(data);
   })

module.exports=loginRouter   