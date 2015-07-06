var drawMap = function() {
	var map = L.map('container');
	map.setView([39.8282, -98.5795], 4);
	var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
	layer.addTo(map);

    // Execute your function to get data

    var data;
    $.ajax({
	    url: 'data/response.json', 
	    type: 'get', 
	    success: function(dat) {
		    data = dat;
		    data.map(function(d) {
			    var circle = new L.circleMarker([d.lat, d.lng], {radius: 3, color: 'green', opacity: 0.5}).addTo(map);
                var race = d.Race;
                var weapon = d.Weapon;
                circle.bindPopup('<b>Race:</b> ' + race + ' <br><b>Weapon:</b> ' + weapon);

		    });
	    }, 
	    dataType: 'json'
    });
};






