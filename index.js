const express = require('express');
const app = express();
const eventRouter = require('./routes/events');
app.use(express.json());

app.use('/api/v3/app',eventRouter);

app.listen(3000,()=>{
    console.log("Running at 3000")
})