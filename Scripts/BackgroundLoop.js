//JavaScript Document
let SunClicks = 0;
let SunCPS = 0
let SeaGullCPS = 0
let AllTowerClicksDecimal = 0
let AllTowerClicks = 0
let SeaGullLevel = 1
let DogsCPS = 0
let DogsClicks = 0

onmessage = function(e) {
 SunCPS = e.data.SunCPS
 SeaGullCPS = e.data.SeaGullCPS
DogCPS = e.data.DogsCPS
  if (e.data.SunClicks != undefined){
    SunClicks = e.data.SunClicks
  }
  if (e.data.AllTowerClicks != undefined){
    AllTowerClicksDecimal = e.data.AllTowerClicks
  }
if (e.data.DogsClicks != undefined){
    DogsClicks = e.data.DogsClicks
  }
  if (e.data.SeaGullLevel != undefined){
    SeaGullLevel = e.data.SeaGullLevel
  }
}

function timedCount() {
  SunClicks += SunCPS;
	DogsClicks +=DogsCPS;
  //1                         0.1          2
  AllTowerClicksDecimal += SeaGullCPS * SeaGullLevel;
  AllTowerClicks = (Math.floor(AllTowerClicksDecimal / SeaGullLevel) * SeaGullLevel) + DogsClicks;
  postMessage({ 
	  DogsClicks: DogsClicks,
		SunClicks: SunClicks,
		AllTowerClicks: AllTowerClicks  
	});
  setTimeout("timedCount()", 16);
}

timedCount();