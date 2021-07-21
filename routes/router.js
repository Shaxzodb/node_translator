const {Router}=require('express')
const router=Router();
    
const translate = require('@vitalets/google-translate-api');

router.post('/api',(req,res)=>{
    
    if (req.body.name){

        translate(`${req.body.name}`, {from:'uz',to: 'en'})
        .then(data => {
//            console.log(data.text)
//            console.log(data.from.language.iso);   
            res.send({name:data.text});
        }).catch(err => {
            console.error(err);
        });
        
    }else{
        res.send(req.body);
    }

    

});

router.get('/',(req,res)=>{

    res.render('index',{
    
    });     
    
});

module.exports=router;