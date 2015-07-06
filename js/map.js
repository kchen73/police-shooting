var drawMap = function() {
	var map = L.map('container');
	map.setView([39.8282, -98.5795], 4);
	var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
	layer.addTo(map);

    var data;
    $.ajax({
	    url: 'data/response.json', 
	    type: 'get', 
	    success: function(dat) {
		    data = dat;
		    data.map(function(d) {
			    var race = d.Race;
                var weapon = d.Weapon;
                var circle = new L.circleMarker([d.lat, d.lng], {radius: 1, color: 'black', opacity: 0.1}).addTo(map);

                if (d.lng < -116) {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'yellow', opacity: 0.7}).addTo(map);
                }
                else if (d.lng < -103) {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'purple', opacity: 0.7}).addTo(map);
                }
                else if (d.lng < -93) {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'orange', opacity: 0.7}).addTo(map);
                }
                else if (d.lat < 37) {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'red', opacity: 0.7}).addTo(map);
                }
                else if (d.lng < -80) {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'blue', opacity: 0.7}).addTo(map);
                }
                else {
 					var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'green', opacity: 0.7}).addTo(map);               	
                }

                if (race === 'Unknown') {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 2, color: 'white', opacity: 0.1}).addTo(map);
                }
                else if (race === 'White') {
                    var circle = new L.circleMarker([d.lat, d.lng], {radius: 4, color: 'black', opacity: 0.6}).addTo(map);
                }
                else {
                	var circle = new L.circleMarker([d.lat, d.lng], {radius: 4, color: 'black', opacity: 1}).addTo(map);
                }
                circle.bindPopup('<b>Race:</b> ' + race + ' <br><b>Weapon:</b> ' + weapon);
		    });
	    }, 
	    dataType: 'json'
    });
};






