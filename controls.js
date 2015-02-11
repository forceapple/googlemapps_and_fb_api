//controls

$(document).ready(function(){

	
		var newSpot;
		
		$('html').keydown(function(e){
			// up W
		    if(e.which==87){
		        lat =lat+0.00005;
		        newSpot = new google.maps.LatLng (lat,lng)
		    	addMarker(newSpot);

		    }
		    // right D
		    if(e.which==68){
		        lng =lng+0.00007;
		        newSpot = new google.maps.LatLng (lat,lng)

		    	addMarker(newSpot);

		    }   
		    // down S
		    if(e.which==83){
		        lat =lat-0.00005;
		        newSpot = new google.maps.LatLng (lat,lng)
		    	addMarker(newSpot);

		    }
		    // left A
		    if(e.which==65){
		        lng =lng-0.00007;
		        newSpot = new google.maps.LatLng (lat,lng)
		    	addMarker(newSpot);

		    }   
		});

		$("#ghost").click(function(){
			setInterval(function(){
		    	ghost(setspot2);
		    },5000) 
		})


	

});
