<!DOCTYPE html>
<html>
<head>
<style type="text/css">
body {
	background-color: #ECF0F1;
	color:#898989;
	font-size:2em;
}
  #map-canvas { 
  	width:600px; 
  	height:600px;
  	display: inline-block;
  	float: left;
  }

  #inven{
  	width:600px; 
  	height:600px;
  	display: inline-block;
  	float: left;
  }
  ul { 
  	list-style-type: none;
  	margin: 0;
	padding: 0; 
}
ul li { 
	display: inline;
	 }

  .nail{
  	width:10%;
  	height:10%;
  }
  #header{
  	float: right;
  	display: inline-block;
  	margin: 0;
  }
  #sb{
  	top:0;
  	display: inline-block;
  }
  #logout{
  	float: right;
  	margin: 10px;
  }
  #controls{
  	display: inline-block;
  }
  .fb-login-button{
  	margin: 10px;
  }

 </style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script> 
// Facebook connect---------------------

$(document).ready(function(){
score=0;
var store = [];
if(store.length==20){
	store.pop();
}
$("#imgCon").append(store)
$('#sb').append("Score: "+score)
	
});
</script>
<script src="facebook.js"></script>
<script src="map.js"></script>
<script src="video.js"></script>
<script src="controls.js"></script>

</head>
<body>
	<div id='sb'></div>
	<div id='controls'>
		<button id="ghost">Add more Ghosts</button>
	</div>
<div id='header'>
	<div class="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false" onlogin='window.location=""'></div>
	<div id='user_info'></div>
</div>
<div id="main">
	<div id='map-canvas'>
		google maps
	</div>
	<div id="inven">
		<ul id='imgCon'>
		</ul
	</div>
</div>

</body>
</html>