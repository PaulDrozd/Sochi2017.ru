$(document).ready(function(){
    ////маска  поля воода телефона
    //$("input[name='phone1']").mask("+7 (999) 999-99-99");

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
    $('.fancybox').fancybox({
       afterClose   : function(){
       }
    });
    $('.fancybox').click(function(){

    });

    // отправка формы
	$('form').on('submit', function(event){
	   $.ajax({
	      type: "POST",
	      url: "/mail.php",
	      dataType: "json",
	      data: $(this).serialize(),
	      success: function(data) {
	        if(data["code"] == 0){
	          alert(data["text"]);
	          location.reload();
	        }
	        else{
	          alert('Спасибо за заявку!');
	          location.reload();
	        }
	        $.fancybox.close();
	      }
	    });
	    return false;
	  });
});


jQuery(function() {

  var example = $("#slider_news");
  var parent = example.parents(".track");
  var track = example.silverTrack({
    animationAxis: 'y',
  });

  track.install(new SilverTrack.Plugins.Css3Animation());

  track.install(new SilverTrack.Plugins.Navigator({
    prev: $("a.prev", parent),
    next: $("a.next", parent)
  }));

  track.install(new SilverTrack.Plugins.ResponsiveHubConnector({
    layouts: ["phone", "small-tablet", "tablet", "web"],
    onReady: function(track, options, event) {
      options.onChange(track, options, event);
    },

    onChange: function(track, options, event) {
      track.options.mode = "vertical";
      track.options.autoheight = false;
      track.options.perPage = 3;

      if (event.layout === "small-tablet") {
        track.options.perPage = 3;

      } else if (event.layout === "phone") {
        track.options.mode = "vertical";
        track.options.autoHeight = true;
      }

      track.restart({keepCurrentPage: true});
    }
  }));

  track.start();

});
