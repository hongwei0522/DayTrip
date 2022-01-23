//基隆簡介效果
let introductionTweens = document.querySelectorAll(".introductionTween");

introductionTweens.forEach(function(introductionTween, index){
    gsap.defaults({duration:3})
    let tweenRed = gsap
    .timeline({ paused: true})
    .to(introductionTween.querySelector(".introduction-word"), {color:"red" , y: 50, scale:1.5})
    introductionTween.addEventListener("mouseenter" , () => tweenRed.play());
    introductionTween.addEventListener("mouseleave" , () => tweenRed.reverse());
})
//基隆在哪裡效果
gsap.fromTo("#location-alllogo img", {opacity:0},{y:-250, opacity:1 ,stagger:{each:1}})
