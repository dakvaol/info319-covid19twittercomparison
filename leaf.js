//getData draws the John Hopkins covid-19 data
function drawCircle(lat,long,infectionRate, region, colorGrad){
    var circle = L.circle([lat,long], {
      color: colorGrad,
      fillColor: colorGrad,
      fillOpacity: '0.5',
      radius: infectionRate/3
    })

    //Adds a popup to show the region and confirmed active cases
    circle.bindPopup('Region: ' + '"' + region + '"' + ' Infection rate: ' + Math.floor(infectionRate));
    circle.addTo(mymap);
};

//drawCircleAlt draws the twitter data. 
//it is a seperate function cause it requires less parameters
function drawCircleAlt(lat,long){
  var circle = L.circle([lat,long], {
    color: 'blue',
    fillColor: 'f03',
    fillOpacity: '0.5',
    radius: 1
  })
  
  circle.addTo(mymap);
};

//function to clear the map by reloading it
function reloadPage(){
  location.reload();
};
