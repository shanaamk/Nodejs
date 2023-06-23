const express = require('express')
const userregRouter = express.Router()

userregRouter.post('/userreg', function (req, res) {
    const data = {

        name: req.body.Name,
        gender: req.body.Gender,
        address: req.body.Address,
        email: req.body.Email,
        phnno: req.body.PhoneNo,
        username: req.body.Username,
        password: req.body.Password,
        cpassword: req.body.ConformPassword
    }
    console.log(data);
})

userregRouter.post('/archreg1', function (req, res) {
    const data = {

        name: req.body.Name,
        email: req.body.Email,
        phnno: req.body.PhoneNo,
        username: req.body.Username,
        password: req.body.Password,
        cpassword: req.body.ConformPassword
    }
    console.log(data);
})

userregRouter.post('/projectreg1', function (req, res) {
    const data = {

        name: req.body.Name,
        email: req.body.Email,
        phnno: req.body.PhoneNo,
        username: req.body.Username,
        password: req.body.Password,
        cpassword: req.body.ConformPassword
    }
    console.log(data);
})
userregRouter.post('/workerreg', function (req, res) {
    const data = {

        name: req.body.Name,
        email: req.body.Email,
        phnno: req.body.PhoneNo,
        worktype: req.body.WorkType,
        workexperience: req.body.WorkExperience,
        username: req.body.Username,
        password: req.body.Password,
        cpassword: req.body.ConformPassword
    }
    console.log(data);
})

userregRouter.post('/contractreg1', function (req, res) {
    const data = {

        name: req.body.Name,
        email: req.body.Email,
        phnno: req.body.PhoneNo,
        worktype: req.body.WorkType,
        uploadcv: req.body.CV,
        username: req.body.Username,
        password: req.body.Password,
        cpassword: req.body.ConformPassword
    }
    console.log(data);
})
module.exports = userregRouter