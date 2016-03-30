 var Proj= require('../models/schema');
var express = require('express');
var router = express.Router();


router.route('/employees')  //change here

   .get(function(req, res) {
  Proj.find({},function(err,data)
	   {
       if(err){console.log("Error "+err);}
	   else{res.send(data);}
       })
	   
})



   .post(function(req, res ) {

var proj = new Proj(req.body);
   proj.code = req.body.code;
   proj.name = req.body.name;
   proj.city = req.body.city;


      
   proj.save(function(err,data) {
    if (err) {
      return res.send(err);
    }
 
    res.send({ message: 'Data Added'});
   

  });

  
});


  
router.route('/employees/:id')
.put(function(req,res){
Proj.findOne({ _id: req.params.id }, function(err,proj) {
  

    proj.code = req.body.code,
   proj.name = req.body.name,
   proj.city = req.body.city

   
		 proj.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.json({ message: 'employee updated!' });
		}   
    });
  });
  })
  //res.end();
  .get(function(req,res){
	  Proj.findOne({ _id: req.params.id }, function(err,proj)
		  {
			  res.send(proj);
		  })
  });
  

  



router.route('/employees/:id')
.delete(function(req, res) {
  Proj.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
  
});



module.exports = router;
