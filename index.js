const express=require('express');
const hbs=require('hbs');
const router=require('./routes/router')


const app=express();
//require('./routes/prod')(app);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs')


app.use('/',router);
const PORT=process.env.PORT || 8000;
app.listen(PORT,console.log(`The Server ran on port${PORT}`))