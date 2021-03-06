var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');

/**
 * Add a candidate to mongo
 */
router.post('/', function(req, res, next){
  var newCand = new Candidate(req.body);
  
  newCand.save((err) => {
    if(err){
      console.log(err);
      //return res.json({success: false, message: "Erro no cadastro algum campo requerido faltando. "});
      res.render('confirmation', {
        title: "Failure",
        message: "Erro no cadastro algum campo requerido faltando."
      });
    }else{
      res.render('confirmation', {
        title: "Success",
        message: "Adicionado com sucesso."
      });
    }
  });
  // Make some thing 
  // res.render('podepah', { title: 'SOh', message: 'Guardian > Fallen' });
  // res.json({ title: 'SOh', message: 'Guardian > Fallen' });
});

module.exports = router;
