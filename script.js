$(document).ready(function(){
    $('img').click(function() {
        var gato = $(this).attr("data-alt-src");
        $(this).attr("src",gato );
    });
});