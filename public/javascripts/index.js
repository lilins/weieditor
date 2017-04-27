var md = require('./customRule.js').md;
require('../stylesheets/style.css');

$('#text').bind('keyup',function(){
    var src = $('#text').val();
    var html_content = md.toHTML("xx"+src);
    var str = $(html_content);
    $('#show').html(str);
});