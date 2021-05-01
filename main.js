new TypeIt("#typeEffect", {
    speed: 75,
    loop: true,
})
  .type("Frontend designer")
  .pause(2000)
  .delete(8, {speed:200})
  .type("developer")
  .pause(2000)
  .go();

$(window).on('scroll', function(){
  if ($(window).scrollTop() > 100) {
    $('#MainNav').removeClass('navbar-dark').addClass('navbar-light');
  } else {
    $('#MainNav').removeClass('navbar-light').addClass('navbar-dark');
  }
})