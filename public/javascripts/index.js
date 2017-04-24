var markdown = require('markdown').markdown;
require('../stylesheets/style.css');

$('#text').bind('keyup',function(){
    var src = $('#text').val();
    var html_content = markdown.toHTML(src);
    var str = $(html_content);
    $('#show').html(str);
    // $.ajax({
    //      type: "POST",
    //      url: "/convert",
    //      data: {text:src},
    //      dataType: "json",
    //      success: function(data){
    //          console.log(data.text);
    //          var str = $(data.text);
    //      	    $('#show').html(str);
    //       }
    //  });

});