gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });

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

gsap.to(".introduction", {
  scrollTrigger: {
    trigger:".introduction", 
    // markers:true, 
    start: "top 20%",
    end: "bottom 20%",
    // scrub:true,
    toggleActions: "restart pause reverse pause"}, 
  opacity:1 ,duration:3})
  
//基隆在哪裡效果
gsap.to("#location-alllogo img", {
  scrollTrigger: {
    trigger:".location",
    // markers:true,
    start: "top center",
    end: "center center",
    scrub:true,
    toggleActions: "restart pause reverse pause"},
  y:-250, opacity:1 ,duration:3, stagger:{each:1}})

  //標籤效果
gsap.to(".trip-progress", {
  scrollTrigger: {
    trigger: ".trip",
    // markers:true,
    start: "top center",
    end: "80% center",
    scrub: true,
  },
  scaleY: 3,
  transformOrigin: "top", 
  ease: "none"
})

gsap.to(".trip-pin", {
  scrollTrigger:{
  trigger:".trip-pin",
  start: "top 10%",
  end: "+=930 10%",
  // markers:true,
  pin:true,
},
})



//一日遊
let tripEast = document.getElementById("tripEast");

model = function(dom, className, id, src, append, text, func){
  let newElement = document.createElement(dom);
  newElement.className = className;
  newElement.id = id;
  newElement.src = src;
  newElement.textContent = text;
  document.getElementById(append).appendChild(newElement);
  newElement.onclick = func;
}

for(let i = 0; i <DayTripData.length; i++){
  if(DayTripData[i].direction == "東岸"){
    tripEastDiv(i)
    tripMaps(i)
  }
}

function tripEastDiv(i){
  model("div", "tripEastDiv", DayTripData[i].creatTime, "", "tripEast", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  // model("div", "trip-button", "tripBtnDiv", "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn", "", DayTripData[i].creatTime,"上一個景點", "");
  model("button", "trip-button-next", "nextBtn", "", DayTripData[i].creatTime,"下一個景點", "");
}

//地圖
function tripMaps(i){
  let tripMap = document.getElementById("tripMap");
  console.log(tripMap.clientHeight)
  let a = document.getElementById(DayTripData[i].creatTime)
  a.clientHeight = tripMap.clientHeight
  console.log(a.clientHeight)

  // document.getElementById(DayTripData[i].clientHeight) = tripMap.clientHeight
}

//地圖效果
gsap.to(".trip-map", {
  scrollTrigger:{
  trigger:".trip-map",
  start: "top top",
  end: "+=930 top",
  // markers:true,
  pin:true,
},
})

gsap.to(".tripStation", {
  scrollTrigger:{
  trigger:".tripStation",
  start: "top top",
  end: "+=930 top",
  // markers:true,
  toggleActions: "play reset play reset"
},
opacity:0})

gsap.to(".EA1-1", {
  scrollTrigger:{
  trigger:"#EA1-1",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".EA1-2", {
  scrollTrigger:{
  trigger:"#EA1-2",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".EA1-3", {
  scrollTrigger:{
  trigger:"#EA1-3",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".EA1-4", {
  scrollTrigger:{
  trigger:"#EA1-4",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".EA1-5", {
  scrollTrigger:{
  trigger:"#EA1-5",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

