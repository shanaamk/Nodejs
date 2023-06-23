const express = require('express')
const loginRouter = require('./src/routes/loginRouter')
const userregRouter = require('./src/routes/userregRouter')
const app = express()

app.use(express.urlencoded({extended:true}))



app.use('/login',loginRouter)
app.use('/userreg',userregRouter)
app.use('/archreg1',userregRouter)
app.use('/projectreg1',userregRouter)
app.use('/workerreg',userregRouter)
app.use('/contractreg1',userregRouter)
app.listen(3000)