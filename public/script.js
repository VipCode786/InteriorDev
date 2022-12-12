var vwWidth = window.innerWidth;

var controller = new ScrollMagic.Controller();

//scene 1
//for parallax scroll
var parallaxScrolling = new TimelineMax()
  .to(".div1", 1, {y: 100, ease: Power1.easeOut})

new ScrollMagic.Scene({
  triggerElement: ".div1",
  duration: "100%",
  offset: 0,
  triggerHook: 0
})
.setTween(parallaxScrolling)
.addTo(controller)

//scene 2 with horizontal scroll
//for horizontal scrolling
var horizontalSlide = new TimelineMax()
  .to(".div2", 0.2,   {x: 0, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -vwWidth, ease: Power1.easeOut}, )	
  .to(".div2", 0.2,   {x: -vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 0.2,   {x: -2*vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 1,   {x: -3*vwWidth, ease: Power1.easeOut}, )
  .to(".div2", 0.2,   {x: -3*vwWidth, ease: Power1.easeOut}, )

new ScrollMagic.Scene({
  triggerElement: ".div2",
  duration: "350%",
  offset: 0,
  triggerHook: -0.02
})
.setPin('.div2')
.setTween(horizontalSlide)
.addTo(controller)