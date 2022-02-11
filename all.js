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
    .to(introductionTween.querySelector(".introduction-word"), {color:"rgb(165, 219, 245)" , y: 50, scale:1.5})
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

if(window.innerWidth < 1010){
  gsap.to("#location-alllogo img", {
    scrollTrigger: {
      trigger:".location",
      // markers:true,
      start: "top center",
      end: "center center",
      scrub:true,
      toggleActions: "restart pause reverse pause"},
    y:-100, opacity:1 ,duration:3, stagger:{each:1}});

  document.getElementById("tripMap").style.display="none";
  document.getElementById("tripWestMap").style.display="none";
  document.getElementById("tripCenterMap").style.display="none";
  //東岸
  gsap.to(".trip-progressEast", {
    scrollTrigger: {
      trigger: ".trip",
      // markers:true,
      start: "top center",
      end: "80% center",
      scrub: true,
    },
    scaleY: 12.5,
    transformOrigin: "top", 
    ease: "none"
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
    scaleY: 12.5,
    transformOrigin: "top", 
    ease: "none"
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
    scaleY: 12.5,
    transformOrigin: "top", 
    ease: "none"
  })
}else{
  gsap.to("#location-alllogo img", {
    scrollTrigger: {
      trigger:".location",
      // markers:true,
      start: "top center",
      end: "center center",
      scrub:true,
      toggleActions: "restart pause reverse pause"},
    y:-250, opacity:1 ,duration:3, stagger:{each:1}})
  //東岸
  gsap.to(".trip-progressEast", {
    scrollTrigger: {
      trigger: ".trip",
      // markers:true,
      start: "top center",
      end: "80% center",
      scrub: true,
    },
    scaleY: 8.5,
    transformOrigin: "top", 
    ease: "none"
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
    scaleY: 8.5,
    transformOrigin: "top", 
    ease: "none"
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
    scaleY: 8.5,
    transformOrigin: "top", 
    ease: "none"
  })
}


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
  //上一個按鈕
  let prevBtns = document.getElementById("prevBtn"+[i]);
  prevBtns.onclick = prev
  let prevNumber = i;
  function prev(){
    if(prevBtns == prevBtn0){
      window.location.hash = "#DayTrip15";
    }else{
      window.location.hash = "#DayTrip" + prevNumber;
    }
  }
  //下一個按鈕
  let nextBtns = document.getElementById("nextBtn"+[i]);
  nextBtns.onclick = next
  let nextNumber = i + 2;
  function next(){
    if(nextBtns == nextBtn14){
      window.location.hash = "#DayTrip1";
    }else{
      window.location.hash = "#DayTrip" + nextNumber;
    }
  }
}


function tripEastDiv(i){
  model("div", "tripEastDiv", DayTripData[i].creatTime, "", "tripEast", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn"+[i], "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn"+[i], "", "tripBtnDiv"+[i],"下一個景點", "");
}
function tripWestDiv(i){
  model("div", "tripWestDiv", DayTripData[i].creatTime, "", "tripWest", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn"+[i], "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn"+[i], "", "tripBtnDiv"+[i],"下一個景點", "");
}
function tripCenterDiv(i){
  model("div", "tripCenterDiv", DayTripData[i].creatTime, "", "tripCenter", "", "");
  model("img", "trip-location", "", DayTripData[i].photoUrl, DayTripData[i].creatTime, "", "");
  model("p", "trip-center-word", "", "", DayTripData[i].creatTime, DayTripData[i].location, "");
  model("p", "trip-center-word-left", "", "", DayTripData[i].creatTime, DayTripData[i].content, "");
  model("div", "trip-button", "tripBtnDiv"+[i], "", DayTripData[i].creatTime, "", "");
  model("button", "trip-button-prev", "prevBtn"+[i], "", "tripBtnDiv"+[i],"上一個景點", "");
  model("button", "trip-button-next", "nextBtn"+[i], "", "tripBtnDiv"+[i],"下一個景點", "");
}



let tripEastDivHeight = document.querySelector('.tripEastDiv').clientHeight;
let tripContentHeight = tripEastDivHeight*4;

//標籤效果
//東岸
gsap.to(".trip-pin-east", {
  scrollTrigger:{
  trigger:".trip-pin-east",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})
//西岸

gsap.to(".trip-pin-west", {
  scrollTrigger:{
  trigger:".trip-pin-west",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})
//市區

gsap.to(".trip-pin-center", {
  scrollTrigger:{
  trigger:".trip-pin-center",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  pin:true,
},
})

//地圖效果
//東岸
gsap.to(".trip-map-East", {
  scrollTrigger:{
  trigger:".trip-map-East",
  start: "top top",
  end: `80%  top`,
  // markers:true,
  pin:true,
},
})

gsap.to(".tripStation", {
  scrollTrigger:{
  trigger:".trip",
  start: "top top",
  end: `${tripContentHeight} top`,
  // markers:true,
  // toggleActions: "play reset play reset"
},
opacity:0})

gsap.to(".DayTrip1", {
  scrollTrigger:{
  trigger:"#DayTrip1",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip2", {
  scrollTrigger:{
  trigger:"#DayTrip2",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip3", {
  scrollTrigger:{
  trigger:"#DayTrip3",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip4", {
  scrollTrigger:{
  trigger:"#DayTrip4",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip5", {
  scrollTrigger:{
  trigger:"#DayTrip5",
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
  end: `80%  top`,
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

gsap.to(".DayTrip6", {
  scrollTrigger:{
  trigger:"#DayTrip6",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip7", {
  scrollTrigger:{
  trigger:"#DayTrip7",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip8", {
  scrollTrigger:{
  trigger:"#DayTrip8",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip9", {
  scrollTrigger:{
  trigger:"#DayTrip9",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip10", {
  scrollTrigger:{
  trigger:"#DayTrip10",
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
  end: `80%  top`,
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

gsap.to(".DayTrip11", {
  scrollTrigger:{
  trigger:"#DayTrip11",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip12", {
  scrollTrigger:{
  trigger:"#DayTrip12",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip13", {
  scrollTrigger:{
  trigger:"#DayTrip13",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip14", {
  scrollTrigger:{
  trigger:"#DayTrip14",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})

gsap.to(".DayTrip15", {
  scrollTrigger:{
  trigger:"#DayTrip15",
  start: "top top",
  end: "bottom top",
  toggleActions: "play reset play reset"
},
opacity:1,duration:3})