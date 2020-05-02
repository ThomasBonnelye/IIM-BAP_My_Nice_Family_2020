jQuery(document).ready(function() {
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
      // Si un défillement de 350 pixels ou plus.
      // Ajoute le bouton
      $('.logo').attr("src","img/logo_scroll.png");
      
    } else {
      // Sinon enlève le bouton
      $('.logo').attr("src","img/logo.svg ");
      
    }
  });

});

