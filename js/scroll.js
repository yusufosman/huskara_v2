var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#north-west", 0.5, {opacity: 1.0, top: 0}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#north", 0.5, {opacity: 1.0, top: 0}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#north-east", 0.5, {opacity: 1.0, top: -10}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#south-west", 0.5, {opacity: 1.0, top: 365}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#south", 0.5, {opacity: 1.0, top: 375}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    triggerElement: "#nav-trigger"
})
    .setTween("#south-east", 0.5, {opacity: 1.0, top: 360}) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#intro", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#intro-trigger"
})
    .setTween(tween) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo(".cascara", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#cascara-trigger"
})
    .setTween(tween) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#team", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#team-trigger"
})
    .setTween(tween) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#shop-collection", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#shop-trigger"
})
    .setTween(tween) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#desktop-nav", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#navbar-trigger"
})
    .setTween(tween) // trigger a TweenMax.to tween
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        //TweenMax.fromTo("#polaroid1", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
        TweenMax.fromTo("#polaroid1", 0.2, {scale: 1.2, autoAlpha: 0.0, top: 650, }, {scale: 1, autoAlpha: 1, top:450, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#polaroid1-trigger"
})
    .setTween(tween)
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);


var tween = new TimelineMax ()
    .add([
        //TweenMax.fromTo("#polaroid1", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
        TweenMax.fromTo("#polaroid2", 0.2, {scale: 1.2, autoAlpha: 0.0, top: 1200}, {scale: 1, autoAlpha: 1, top:1400, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#polaroid2-trigger"
})
    .setTween(tween)
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        //TweenMax.fromTo("#polaroid1", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
        TweenMax.fromTo("#polaroid3", 0.2, {scale: 1.2, autoAlpha: 0.0, top: 2800}, {scale: 1, autoAlpha: 1, top:3000, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#polaroid3-trigger"
})
    .setTween(tween)
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        //TweenMax.fromTo("#polaroid1", 0.5, {autoAlpha: 0.0}, {autoAlpha: 1, ease: Linear.easeInOut})
        TweenMax.fromTo("#polaroid4", 0.2, {scale: 1.2, autoAlpha: 0.0, top: 4250}, {scale: 1, autoAlpha: 1, top:4450, ease: Linear.easeInOut})
    ]);

var scene = new ScrollMagic.Scene({
    triggerElement: "#polaroid4-trigger"
})
    .setTween(tween)
    //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);





var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#parrot", 1, {top:-20}, {top: -200, left: 650, ease: Linear.easeNone}),
    ]);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#parrot-trigger", duration: 400})
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#parrot-2", 1, {top:250}, {top: 100, left: -200, ease: Linear.easeNone}),
    ]);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#parrot-trigger", duration:  $(window).height()})
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

var tween = new TimelineMax ()
    .add([
        TweenMax.fromTo("#palm-tree", 1, {bottom: 20}, {bottom:150, ease: Linear.easeNone}),
    ]);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#palm-trigger", duration:  350})
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

