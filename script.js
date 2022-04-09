window.addEventListener('load', (event) => {

  // Variable Declare 
  let Indtoday, indtime, indDD, indMM, indYYYY, indDate;

  Indtoday = new Date();
  indtime = Indtoday.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  indDD = String(Indtoday.getDate()).padStart(2, '0');
  indMM = String(Indtoday.getMonth() + 1).padStart(2, '0'); //January is 0!
  indYYYY = Indtoday.getFullYear();
  indDate = indDD + '/' + indMM + '/' + indYYYY;

  // Display Time and Date (India)
  displayTime(indtime);
  displayIndDate(indDate);

function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        var fetch = JSON.parse(xmlHttp.responseText);
        const arizonaTime = new Date(fetch.datetime);
        azTime = arizonaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        azDate = String(arizonaTime.getDate()).padStart(2, '0') + '/' + String(arizonaTime.getMonth()+ 1).padStart(2, '0') + '/' + String(arizonaTime.getFullYear()).padStart(2, '0');
        displayAZtime(azTime);
        displayAzDate(azDate);
      }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

var url = "https://timezone.abstractapi.com/v1/current_time/?api_key=2fc8eda074b24b7b84c6b5bf72e0d236&location=Arizona, United States America"

httpGetAsync(url);

  // Display Time and Date (Arizona)
});

function displayTime(time) {
  document.getElementById("indTime").innerHTML = time;
}


function displayAZtime(azTime) {
  document.getElementById("AZtime").innerHTML = azTime;
}

function displayIndDate(indDate) {
  document.getElementById("indDate").innerHTML = indDate;
}

function displayAzDate(azDate) {
  document.getElementById("azDate").innerHTML = azDate;
}

setInterval(function () {
  var today = new Date();
  var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("time").innerHTML = time;
}, 1000);

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
