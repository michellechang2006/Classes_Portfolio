$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  // center:true,
  margin:10,
  navText:false,
  // URLhashListener:true,
  autoplayHoverPause:true,
  smartSpeed:300,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
    576:{
        items:2,
        nav:true
    },
    768:{
        items:3,
        nav:false
    },
    1200:{
        items:4,
        nav:true,
        loop:false
    },
  //   1400:{
  //     items:6,
  //     nav:true,
  //     loop:false
  // }
}
});
