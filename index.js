$(function(){

    $('.heading').hide();
    $('.about').hide();
    $('.projects').hide();
    $('.social').hide();
    $('#introAbout').hide();
    $('#introProjects').hide();
    $('#introSocail').hide();


    $('.about').hover(function() {
      $('#introAbout').show();
    }, function() {
      $('#introAbout').hide();
    });

    $('.projects').hover(function() {
      $('#introProjects').show();
    }, function() {
      $('#introProjects').hide();
    });

    $('.social').hover(function() {
      $('#introSocail').show();
    }, function() {
      $('#introSocail').hide();
    });



    $('.heading').delay(7000).fadeIn(3000);
    $('.about').delay(8000).fadeIn(3000);
    $('.projects').delay(9000).fadeIn(3000);
    $('.social').delay(10000).fadeIn(3000);
    $('#type').delay(6200).fadeOut('slow'); //Typewriter animation fadeout delay
  });
