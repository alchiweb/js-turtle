$(document).ready(function() {
    var currentTag = "";

    $("h2").each(function(){
        var hdr = $(this);
        console.log($(hdr).nextUntil("h3",hdr))
        
    });

});