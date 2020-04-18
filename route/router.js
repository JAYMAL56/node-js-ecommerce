const express = require('express')
const router = new express.Router()
const Test = require('../models/user')

router.get('/jkd',(req,res)=>{
    res.render('partials/from');
})


router.post('/jkd',async(req,res)=>{
   const test = new Test()
    try{
        
        test.first_name = req.body.first_name;
        test.last_name = req.body.last_name;
        test.city = req.body.city;
        test.email = req.body.email;
   
       
        await test.save()
        res.redirect('/list')
    }catch (e) {
        console.log('error',e)
    }
})


router.get('/list',(req,res)=>{
     
     Test.find((error,test)=>{
         if(!error){
             res.render('partials/list',{
                 list:test
             })
         }else{
             console.log('some err',error)
         }
     })
    
    })


router.get('/jkd/:id',(req, res)=>{
     Test.findById(req.params.id, (err, test) => {
        if (!err) {
            res.render("partials/from", {
              
                jkd: test
            });
        }
    });
});


router.get('/jkd/delete/:id', (req, res) => {
    Test.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});




module.exports = router;
    
 
        




     