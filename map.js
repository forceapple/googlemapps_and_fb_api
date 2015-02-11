//googlemaps
var map = null;
var pacman = [];
var gmarker = [];
var start=false;
var lat;
var lng;
var setspot;
var setspot2;
var bounds;
$(document).ready(function(){
	var mapOptions = {
		center:{
			//bcit latlong
			lat:49.251198,
			lng:-123.003243
		},
		zoom:15,
		disableDoubleClickZoom: true
	}
	 map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	// dblclick for adding pacman
		
		google.maps.event.addListener(map, "dblclick", function(event) {
	
		    
			    if(start==false){
			   	 	if(userinfo.login != true){
							alert('Please login')
						}else{
				    	lat = event.latLng.lat();
			   			lng = event.latLng.lng();
			    		setspot = new google.maps.LatLng (lat,lng);
			    		setspot2 = new google.maps.LatLng (lat,lng);
			    		ghost(setspot2);
				    	addMarker(setspot);
			    	}

			    	
				};
				start=true;
				console.log(start);
				if(start===true){
					if(userinfo.login != true){
							alert('Please login')
						}
				}
			
		});
	
		
});

	function addMarker(spot){
		//for ghost to spawn randomly
		 setspot2 = new google.maps.LatLng (lat+Math.random()*0.005,lng+Math.random()*-0.005);
		 //console.log(setspot2)
		function setAllMap(map) {
		  for (var i = 0; i < pacman.length; i++) {
		    pacman[i].setMap(map);
		  }
		}
		setAllMap(null); 
		var marker = new google.maps.Marker({

    		position: spot,
		    map: map,
		    icon:{
		    	url:'imgs/pacman.png',
		    	size: new google.maps.Size(20, 20),
            	scaledSize: new google.maps.Size(20, 20)
			}
		});
		pacman.push(marker);
		
	setInterval(function() {
        pacman[0].setPosition(spot);
    }, 1000); 
    //make circle
	var circle = new google.maps.Circle({
	    map: map,
	    clickable: false,
	    // metres
	    radius: 20,
 		//visible: false
	});
	// add circle to pacman
	circle.bindTo('center', marker, 'position');
	//gets bounds of circle
	bounds = circle.getBounds();
	for (var i in gmarker){
		if(bounds.contains(gmarker[i])==true){
			ghost(setspot2)
			score++;
			$('#sb').text("Score: "+score)
			$('#imgCon').append("<li><img class='nail' src='"+userPhotos[Math.round(Math.random()*userPhotos.length)]+"'/></li>")
			var s = $('#imgCon li').size();
			console.log(s);
			if(s>20){
				$('#imgCon ul').empty()
				s=$('#imgCon li').size();
			}
		}
	}
	// removes circle
	circle.setMap(null);


	
	}
	//ghost drop
	function ghost(spot){
		 spot = new google.maps.LatLng (lat+Math.random()*0.005,lng+Math.random()*-0.005);
		var marker = new google.maps.Marker({
    		position: spot,
		    map: map,
		    icon:{
		    	url:'http://forum.pac-rom.com/images/avatars/Ghost.png',
		    	size: new google.maps.Size(20, 20),
            	scaledSize: new google.maps.Size(20, 20)
			}
		});
		gmarker.push(marker.position);
		//kills the ghost
		setInterval(function(){
			marker.setMap(null)
			setInterval(function(){
				gmarker.shift();
			},11000)
			  
		},10000)

	}



