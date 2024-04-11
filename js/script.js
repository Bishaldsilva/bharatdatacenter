jQuery(document).ready(function($) {
    var owlp = $("#owl-demo-2");
    owlp.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        center: false,
        rewind: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
                items: 1,
                nav: false,
                dots: false
            },
            768: {
                items: 3,
                // nav: true,
                loop: false,
                dots: false
            },
            992: {
                items: 3,
                // nav: true,
                loop: true,
                dots: false
            }
        },
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: "swing",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
        autoHeight: false,
        lazyLoad: false
    });

    $(".next").click(function () {
		
        owlp.trigger('next.owl.carousel');

	});
	$(".prev").click(function () {
		
        owlp.trigger('prev.owl.carousel');

	});
});
$(".humberger").click(function(){
    $(".mobile_open_menu").show();
  });
  
  $(".close_btn").click(function(){
    $(".mobile_open_menu").hide();
  });

