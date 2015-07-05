// Function to draw your map
var drawMap = function() {

  var map = L.map('container');
 
  map.setView([39.8282,-98.5795],4);
  layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

  layer.addTo(map);
 

  // Execute your function to get data
 
};



var data;
$.ajax({
     url:'../data/response.json',
     type: "get",
     success: function(dat) {
       data = dat;
       data.map(function(d) {
         var circle = new L.circleMarker([d.lat, d.lng], 
         200000, {color:'red', opacity:.5}).addTo(map)
       });
     }, 
     dataType:"json"
}); 

/*

// Do something creative with the data here!  
var customBuild = function() {

  
}

*/







