$(document).ready(function(){
    ////вызов карусели
  $('.photo_slider').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:false,
    items:1,
    nav:false,
    dots: true
	});
  $('.video_slider').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:false,
    items:1,
    nav:false,
    dots: true
  });
});
