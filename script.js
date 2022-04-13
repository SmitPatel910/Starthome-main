// Arizona Time Fetch API
// let url = "https://timezone.abstractapi.com/v1/current_time/?api_key=2fc8eda074b24b7b84c6b5bf72e0d236&location=Arizona, United States America";
let AzUrl = "http://worldtimeapi.org/api/timezone/America/Phoenix";
let IndiaUrl = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

window.addEventListener('load', (event) => {
  // India Digital time and Date
  IndiaTimeDate(IndiaUrl);
  // Arizona Digital time and Date
  ArizonaTimeDate(AzUrl);
});

// Variable for India Digital Time
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
let hrPosition, minPosition, secPosition;

// Variable for Arizona Digital Time
const HOURHANDD = document.querySelector("#hourr");
const MINUTEHANDD = document.querySelector("#minutee");
const SECONDHANDD = document.querySelector("#secondd");
let hrPositionn, minPositionn, secPositionn;

// Function to calculate India time and Date
async function IndiaTimeDate(IndiaUrl) {
  var inddata = await fetch(IndiaUrl);

  var indjsonData = await inddata.json();
  // Now we will change input parameter to convert into Date Object
  // First extract Date from object
  var inddt = indjsonData.datetime.split('T')[0];
  var indyy = inddt.split('-')[0];
  var indmm = inddt.split('-')[1];
  var inddd = inddt.split('-')[2];
  indDate = indyy.concat("-", indmm).concat("-", inddd);
  // Now extract time from Object
  var indhr = indjsonData.datetime.split('T')[1].split('.')[0].split(':')[0];
  var indmin = indjsonData.datetime.split('T')[1].split('.')[0].split(':')[1];
  var indsec = indjsonData.datetime.split('T')[1].split('.')[0].split(':')[2];
  indTime = indhr.concat(":",indmin).concat(":", indsec);
  // Now concat azDate and azTime then pass into Date Object
  var indDateTime = indTime.concat(" ", indDate);
  indTimeObj = new Date(indDateTime);

  // Date
  inddDate = String(indTimeObj.getDate()).padStart(2, '0') + '/' + String(indTimeObj.getMonth()+ 1).padStart(2, '0') + '/' + String(indTimeObj.getFullYear()).padStart(2, '0');
  // Digital time
  inddTime = indTimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // Print Digital time and Date
  displayIndDate(inddTime,inddDate);

  // Analog time
  let hr = indTimeObj.getHours();
  let min = indTimeObj.getMinutes();
  let sec = indTimeObj.getSeconds();
  hrPosition = (hr*360/12 + (min*(360/60)/12)), minPosition = ((min*360/60) + (sec*(360/60)/60)), secPosition = sec*360/60;
  
  secPositionn += 6;
  minPositionn += (6/60);
  hrPositionn += (3/360);

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"; 
  }





// Function to calculate Arizona time and Date
async function ArizonaTimeDate(url) {
  // var xmlHttp = new XMLHttpRequest();
  // var fetch = JSON.parse(xmlHttp.responseText);
  var data = await fetch(url);
  var jsonData = await data.json();
  // console.log(jsonData);
  // Now we will change input parameter to convert into Date Object
  // First extract Date from object
  var dt = jsonData.datetime.split('T')[0];
  var azyy = dt.split('-')[0];
  var azmm = dt.split('-')[1];
  var azdd = dt.split('-')[2];
  azDate = azyy.concat("-", azmm).concat("-", azdd);
  // Now extract time from Object
  var azhr = jsonData.datetime.split('T')[1].split('.')[0].split(':')[0];
  var azmin = jsonData.datetime.split('T')[1].split('.')[0].split(':')[1];
  var azsec = jsonData.datetime.split('T')[1].split('.')[0].split(':')[2];
  azTime = azhr.concat(":",azmin).concat(":", azsec);
  // Now concat azDate and azTime then pass into Date Object
  var azDateTime = azDate.concat(" ", azTime);
  arizonaTime = new Date(azDateTime);

  // Date
  azDate = String(arizonaTime.getDate()).padStart(2, '0') + '/' + String(arizonaTime.getMonth()+ 1).padStart(2, '0') + '/' + String(arizonaTime.getFullYear()).padStart(2, '0');
  // Digital time
  azTime = arizonaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  // Print Digital time and Date
  displayAzDate(azTime,azDate);

  // Analog time
  let hrr = arizonaTime.getHours();
  let minn = arizonaTime.getMinutes();
  let secc = arizonaTime.getSeconds();
  hrPositionn = (hrr*360/12 + (minn*(360/60)/12)), minPositionn = ((minn*360/60) + (secc*(360/60)/60)), secPositionn = secc*360/60;
  
  secPositionn += 6;
  minPositionn += (6/60);
  hrPositionn += (3/360);

  HOURHANDD.style.transform = "rotate(" + hrPositionn + "deg)";
  MINUTEHANDD.style.transform = "rotate(" + minPositionn + "deg)";
  SECONDHANDD.style.transform = "rotate(" + secPositionn + "deg)"; 
  }


function runTheClock() {
  // Calculate India time and Date in 10 second duration
  IndiaTimeDate(IndiaUrl);  
  // Calculate Arizona time and Date in 10 second duration
  ArizonaTimeDate(AzUrl);
}
var interval = setInterval(runTheClock, 1000);

function displayIndDate(indtime, indDate) {
  let op = indtime + " - " + indDate;
  document.getElementById("indDate").innerHTML = op;
}

function displayAzDate(azTime, azDate) {
  let op2 = azTime + " - " + azDate;
  document.getElementById("azDate").innerHTML = op2;
}

const cycleSearchEngines = se => {
  const curData = search_engines[(se+1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder = "Searching with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};

const search_engines = [{
  src: "goog.svg",
  placeholder: "Google",
  action: "https://www.google.com/search?q="
},  {
  src: "ddg.svg",
  placeholder: "DuckDuckGo",
  action: "https://www.duckduckgo.com/"
}, {
  src: "reddit.svg",
  placeholder: "Reddit",
  action: "https://www.reddit.com/search?q="
},  {
  src: "youtube.svg",
  placeholder: "YouTube",
  action: "https://www.youtube.com/results?q="
}];
