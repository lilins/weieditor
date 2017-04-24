var express = require('express');
var router = express.Router();
var markdown = require( "markdown" ).markdown;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "x" });
});

router.post('/convert',function(req,res,next){
  var text = req.body.text;
  //var md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
  var html_content = markdown.toHTML( text );
  res.send({text:html_content});
})

module.exports = router;
