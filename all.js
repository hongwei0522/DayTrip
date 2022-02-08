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
    toggleActions: "play reset play reset"}, 
  opacity:1.5 ,duration:3})
  
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
  }else if(DayTripData[i].direction == "西岸"){
    tripWestDiv(i)
  }else if(DayTripData[i].direction == "市區"){
    tripCenterDiv(i)
  }
}

function tripEastDiv(i){
  model("div", "tripEastDiv", DayTripData[i].creatTime, "", "tripEast", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn", "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn", "", "tripBtnDiv"+[i],"下一個景點", "");
}
function tripWestDiv(i){
  model("div", "tripWestDiv", DayTripData[i].creatTime, "", "tripWest", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn", "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn", "", "tripBtnDiv"+[i],"下一個景點", "");
}
function tripCenterDiv(i){
  model("div", "tripCenterDiv", DayTripData[i].creatTime, "", "tripCenter", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn", "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn", "", "tripBtnDiv"+[i],"下一個景點", "");
}


let tripEastDivHeight = document.querySelector('.tripEastDiv').clientHeight;
let tripContentHeight = tripEastDivHeight*4;
console.log(tripContentHeight)

//標籤效果
//東岸
gsap.to(".trip-progressEast", {
  scrollTrigger: {
    trigger: ".trip",
    // markers:true,
    start: "top center",
    end: "80% center",
    scrub: true,
  },
  scaleY: 5.5,
  transformOrigin: "top", 
  ease: "none"
})
gsap.to(".trip-pin-east", {
  scrollTrigger:{
  trigger:".trip-pin-east",
  start: "top 10%",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})
//西岸
gsap.to(".trip-progressWest", {
  scrollTrigger: {
    trigger: ".tripWest",
    // markers:true,
    start: "top center",
    end: "80% center",
    scrub: true,
  },
  scaleY: 5.5,
  transformOrigin: "top", 
  ease: "none"
})
gsap.to(".trip-pin-west", {
  scrollTrigger:{
  trigger:".trip-pin-west",
  start: "top 10%",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})
//市區
gsap.to(".trip-progressCenter", {
  scrollTrigger: {
    trigger: ".tripCenter",
    // markers:true,
    start: "top center",
    end: "80% center",
    scrub: true,
  },
  scaleY: 5.5,
  transformOrigin: "top", 
  ease: "none"
})
gsap.to(".trip-pin-center", {
  scrollTrigger:{
  trigger:".trip-pin-center",
  start: "top 10%",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})

//地圖效果
//東岸
gsap.to(".trip-map", {
  scrollTrigger:{
  trigger:".trip-map",
  start: "top top",
  end: `${tripContentHeight}  top`,
  // markers:true,
  pin:true,
},
})

gsap.to(".tripStation", {
  scrollTrigger:{
  trigger:".tripStation",
  start: "top top",
  end: `${tripContentHeight} top`,
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


//西岸
gsap.to("#tripWestMap", {
  scrollTrigger:{
  trigger:"#tripWestMap",
  start: "top top",
  end: `${tripContentHeight}  top`,
  // markers:true,
  pin:true,
},
})

gsap.to(".tripStationWest", {
  scrollTrigger:{
  trigger:".tripStationWest",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  toggleActions: "play reset play reset"
},
opacity:0})

gsap.to(".WE1-1", {
  scrollTrigger:{
  trigger:"#WE1-1",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".WE1-2", {
  scrollTrigger:{
  trigger:"#WE1-2",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".WE1-3", {
  scrollTrigger:{
  trigger:"#WE1-3",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".WE1-4", {
  scrollTrigger:{
  trigger:"#WE1-4",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".WE1-5", {
  scrollTrigger:{
  trigger:"#WE1-5",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

//市區
gsap.to("#tripCenterMap", {
  scrollTrigger:{
  trigger:"#tripCenterMap",
  start: "top top",
  end: `${tripContentHeight}  top`,
  // markers:true,
  pin:true,
},
})

gsap.to(".tripStationCenter", {
  scrollTrigger:{
  trigger:".tripStationCenter",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  toggleActions: "play reset play reset"
},
opacity:0})

gsap.to(".CT1-1", {
  scrollTrigger:{
  trigger:"#CT1-1",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".CT1-2", {
  scrollTrigger:{
  trigger:"#CT1-2",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".CT1-3", {
  scrollTrigger:{
  trigger:"#CT1-3",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".CT1-4", {
  scrollTrigger:{
  trigger:"#CT1-4",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".CT1-5", {
  scrollTrigger:{
  trigger:"#CT1-5",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})