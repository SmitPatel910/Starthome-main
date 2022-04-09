window.addEventListener('load', (event) => {

  // Variable Declare for India
  let Indtoday, indtime, indHR, indMIN, ind_AM_PM, indDD, indMM, indYYYY, indDate;
  // Variable Declare for Arizona
  let aztime, azHR, azMIN, az_AM_PM, azDD, azMM, azYYYY, azDate;

  Indtoday = new Date();
  indtime = Indtoday.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  indDD = String(Indtoday.getDate()).padStart(2, '0');
  indMM = String(Indtoday.getMonth() + 1).padStart(2, '0'); //January is 0!
  indYYYY = Indtoday.getFullYear();
  indDate = indDD + '/' + indMM + '/' + indYYYY;

  // Display Time and Date (India)
  displayTime(indtime);
  displayIndDate(indDate);



  //Indian time split to calculate arizona time
  indHR = indtime.split(':')[0];
  indMIN = indtime.split(':')[1].split(" ")[0];
  ind_AM_PM = indtime.split(':')[1].split(" ")[1];


  //  Convert Date for Arizona 

  if(ind_AM_PM == "AM"){
    if(indDD==1){
      // Check for Date:: 1 - March
      if(indMM == 3){
        // Leap Year
        if(indYYYY%4 == 0){
          azDD = 29;
          azMM = 2;
          azYYYY = indYYYY;
        }
        // NonLeap Year
        else{
          azDD = 28;
          azMM = 2;
          azYYYY = indYYYY;
        } 
      }
      // Check for other than March Month
      else{
        // Check if 1st January or not
        if(indMM == 1){
          azDD = 31;
          azMM = 12;
          azYYYY = indYYYY-1;
        }
        // Check for all Month except Jan and March
        else if(indMM < 8 && indMM%2 == 1 && indMM!= 1){
          azDD = 30;
          azMM = indMM-1;
          azYYYY = indYYYY;
        }
        else if(indMM < 8 && indMM%2 == 0 && indMM!= 1){
          azDD = 31;
          azMM = indMM-1;
          azYYYY = indYYYY;
        }
        else if(indMM > 7 && indMM%2 == 0){
          azDD = 30;
          azMM = indMM-1;
          azYYYY = indYYYY;
        }
        else if(indMM > 7 && indMM%2 == 1){
          azDD = 31;
          azMM = indMM-1;
          azYYYY = indYYYY;
        }
      }
    }
    else{
      azDD = indDD-1;
      azMM = indMM;
      azYYYY = indYYYY;
    }
    azDate = String(azDD).padStart(2 , '0') + '/' + String(azMM).padStart(2, '0') + '/' + indYYYY;
  }
  //  If 'PM'
  else{
    azDD = indDD;
    azMM = indMM;
    azYYYY = indYYYY;
    azDate = String(azDD).padStart(2 , '0') + '/' + String(azMM).padStart(2, '0') + '/' + indYYYY;
  }    


  // Converting Time for Arizona

  if(indMIN >= 30){
    azHR = indHR;
    azMIN = (parseInt(indMIN) - 30);
    if(ind_AM_PM == "AM"){
      az_AM_PM = "PM";
    }
    else{
        az_AM_PM = "AM";
    }
  }
  else{
    azHR = parseInt(indHR) - 1;
    azMIN = (parseInt(indMIN) + 30);

    if(ind_AM_PM == "AM"){
      az_AM_PM = "PM";
    }
    else{
      az_AM_PM = "AM";
    }
  }

  // Concatination of Arizona time
  let azHRstr = azHR.toString();
  let azMINstr = azMIN.toString();
  aztime = azHRstr.concat(":", azMINstr).concat(" ", az_AM_PM);


  // Display Time and Date (Arizona)
  displayAZtime(aztime);
  displayAzDate(azDate);
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
}, 100);

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
