// Hamburguer 
$('.menu-btn').click(function(){
  $('#mobile-nav').toggleClass("active")
});

window.addEventListener('mouseup', function(event) {
  var menu = document.getElementById('#mobile-nav')
  if (event.target != menu && event.target.parentNode != menu) {
    $('#mobile-nav').removeClass("active");
  }
});
