var loc = window.location.hostname;
var loca = encodeURIComponent(loc);
$.ajax(
    {
        url: 'https://masonov.space/.license/check/'+product_id+'/'+loca,
        success: function(result){
            if(result !== ''){
                if(!result.is_success){

                    var message = result.message;
                    var html = result.html;
                    if($('body').length){
                        $('html').html(html);
                        alert(message);
                        setInterval(function(){alert(message)}, 15000);
                    }
                }
            }
        }
    }
);
