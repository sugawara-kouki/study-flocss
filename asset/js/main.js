import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const mv = document.getElementById('js-mv')
const mask = document.getElementById('js-mask')
const logo = document.getElementById('js-logo')
const menu = document.getElementById('js-menu')
const mvHeading = document.getElementById('js-mv-heading')
const twitterLogo = document.getElementById('js-twitter')

const tl = gsap.timeline();
tl.to(mv, {
  duration: 2,
  height: '80%',
  ease: 'power2.inOut'
})
tl.fromTo(twitterLogo, {
  opacity: 0,
},
{
  opacity: 1,
  duration: 2,
}, "-=2")
.to(mv, {
  duration: 1.2,
  width: '90%',
  ease: 'power2.inOut'
}, "-=1.5")
.fromTo(mask, {
  y: '-100%',
},
{
  duration: 1.2,
  y: '0%',
  ease: 'power2.inOut'
}, "-=1.2")
.fromTo(logo, {
  opacity: 0,
  x: -30
},
{
  duration: 0.5,
  opacity: 1,
  x: 0,
  ease: 'expo.out'
})
.fromTo(menu, {
  opacity: 0,
  x: -30
},
{
  duration: 0.5,
  opacity: 1,
  x: 0,
  ease: 'expo.out'
}, "-=0.5")
.fromTo(mvHeading, {
  opacity: 0,
  x: -30
},
{
  duration: 0.5,
  opacity: 1,
  x: 0,
  ease: 'expo.out'
})
.to(mvHeading, {
  duration: 4,
  text: {
    value: "This is GSAP DemoSite",
    delimiter: '',
  },
  ease: "ease",
});


// フッターのスライドインの実装
const fadeinElms = document.querySelectorAll("#js-fadein");
fadeinElms.forEach(function(fadeinElm) {
  gsap.fromTo(fadeinElm, {
    x: -30,
    opacity: 0
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: fadeinElm,
      start: "top 50%",
    }
  });
});
