// window.addEventListener('load', (event) => {

//   // Variable Declare 
//   let Indtoday, indtime, indDD, indMM, indYYYY, indDate, arizonaTime;
 
//   Indtoday = new Date();
//   indtime = Indtoday.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
//   indDD = String(Indtoday.getDate()).padStart(2, '0');
//   indMM = String(Indtoday.getMonth() + 1).padStart(2, '0'); //January is 0!
//   indYYYY = Indtoday.getFullYear();
//   indDate = indDD + '/' + indMM + '/' + indYYYY;

//   // Display Time and Date (India)
//   displayTime(indtime);
//   displayIndDate(indDate);


// var url = "https://timezone.abstractapi.com/v1/current_time/?api_key=2fc8eda074b24b7b84c6b5bf72e0d236&location=Arizona, United States America"
// httpGetAsyncc(url);
//   function httpGetAsyncc(url) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
//           var fetch = JSON.parse(xmlHttp.responseText);
//           arizonaTime = new Date(fetch.datetime);
//           azTime = arizonaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//           azDate = String(arizonaTime.getDate()).padStart(2, '0') + '/' + String(arizonaTime.getMonth()+ 1).padStart(2, '0') + '/' + String(arizonaTime.getFullYear()).padStart(2, '0');
//           displayAZtime(azTime);
//           displayAzDate(azDate);
//         }
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous
//     xmlHttp.send(null);
//   }

// });

// function displayTime(time) {
//   document.getElementById("indTime").innerHTML = time;
// }


// function displayAZtime(azTime) {
//   document.getElementById("AZtime").innerHTML = azTime;
// }

function displayIndDate(indtime, indDate) {
  let op = indtime + " - " + indDate;
  document.getElementById("indDate").innerHTML = op;
}

function displayAzDate(azTime, azDate) {
  let op2 = azTime + " - " + azDate;
  document.getElementById("azDate").innerHTML = op2;
}

// setInterval(function () {
//   var today = new Date();
//   var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   document.getElementById("time").innerHTML = time;
// }, 1000);

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

const cycleSearchEngines = se => {
  const curData = search_engines[(se+1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder = "Searching with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};



const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12 + (min*(360/60)/12)), minPosition = ((min*360/60) + (sec*(360/60)/60)), secPosition = sec*360/60;

    let indDD = String(date.getDate()).padStart(2, '0');
    let indMM = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let indYYYY = date.getFullYear();
    let indDate = indDD + '/' + indMM + '/' + indYYYY;
    indtime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  displayIndDate(indtime,indDate);




// ===============================================================================================================================================================



const HOURHANDD = document.querySelector("#hourr");
const MINUTEHANDD = document.querySelector("#minutee");
const SECONDHANDD = document.querySelector("#secondd");
let hrPositionn, minPositionn, secPositionn;
var url = "https://timezone.abstractapi.com/v1/current_time/?api_key=2fc8eda074b24b7b84c6b5bf72e0d236&location=Arizona, United States America"
httpGetAsyncv(url);
  function httpGetAsyncv(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          var fetch = JSON.parse(xmlHttp.responseText);
          arizonaTime = new Date(fetch.datetime);
          let hrr = arizonaTime.getHours();
          let minn = arizonaTime.getMinutes();
          let secc = arizonaTime.getSeconds();
          hrPositionn = (hrr*360/12 + (min*(360/60)/12)), minPositionn = ((minn*360/60) + (secc*(360/60)/60)), secPositionn = secc*360/60;
          azTime = arizonaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          azDate = String(arizonaTime.getDate()).padStart(2, '0') + '/' + String(arizonaTime.getMonth()+ 1).padStart(2, '0') + '/' + String(arizonaTime.getFullYear()).padStart(2, '0');
          displayAzDate(azTime,azDate);
        }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  }

function runTheClock() {

    secPosition += 6;
    minPosition += (6/60);
    hrPosition += (3/360);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    secPositionn += 6;
    minPositionn += (6/60);
    hrPositionn += (3/360);

    HOURHANDD.style.transform = "rotate(" + hrPositionn + "deg)";
    MINUTEHANDD.style.transform = "rotate(" + minPositionn + "deg)";
    SECONDHANDD.style.transform = "rotate(" + secPositionn + "deg)";

}

var interval = setInterval(runTheClock, 1000);
