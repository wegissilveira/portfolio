$(function(){
    $.getScript('../../data/projetosData.js', function() {

        console.log(returnData())

    }).fail(function(jqxhr, settings, exceptions) {
        console.log('error:')
        console.log(exception)
    })
})