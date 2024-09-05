/*-----------------------------CHART-----------------------------*/
$(function(){
    $('.incident-bars .bar').each(function(key, bar){
        var percentage = $(this).data('percentage');
        $(this).animate({
            'height' : percentage + '%'
        });
    });
});

