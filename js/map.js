// Function to draw your map
var drawMap = function() {

  var map = L.map('container');
 
  map.setView([34,-100],4);
  layer = L.tileLayer('http://{s}.url/{z}/{x}/{y}.png');

  layer.addTo(map);
 

  // Execute your function to get data
 
};

/*

// Function for getting data
var getData = function() {

  // Execute an AJAX request to get the data in data/response.js


  // When your request is successful, call your customBuild function

}

// Do something creative with the data here!  
var customBuild = function() {

  
}

*/







