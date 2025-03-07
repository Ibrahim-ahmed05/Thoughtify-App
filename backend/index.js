const express= require('express');
const app= express();
const db= require('./models');
const cors= require("cors");
app.use(cors());
app.use(express.json());
const postRouter=require('./Routes/Posts')
const userRouter=require('./Routes/Users');
app.use("/posts",postRouter)
app.use("/users",userRouter);
db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server is running");
    })
})
