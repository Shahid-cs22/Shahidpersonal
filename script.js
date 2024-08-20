$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-bars');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-bars');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
           
            $('.top').show();
        }else{ 
            $('.top').hide(); 
            $('#menu').addClass('fa-bars');

        }
    });   

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({
            
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
         
        );


    });
   
});
  