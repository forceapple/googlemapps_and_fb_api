//facebook
var userPhotos=[];
var userinfo={
	name:null,
	pic:null,
	gender:null,
	id:null,
  login:false
};
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '842844695775886',
      xfbml      : true,
      version    : 'v2.2'
    });

    //auth for fb items
    FB.login(function(response){
        console.log(response)
    },{
      scope: 'user_photos,user_likes'
    })
    // end ------------------------------------------


    console.log(FB)
    // first conn
    FB.getLoginStatus(function(resp){
    	if(resp.status=="connected"){
        userinfo.login=true;
        $(".fb-login-button").remove();
        $('#header').append('<button id="logout">logout</button>')

        $('#logout').click(function(){
          FB.logout(function(response) {
            // user is now logged out
            location.reload();
          });
        })
    		FB.api("/me/", function(resp2){
    			console.log(resp2);
    			$('#user_info').append("Hi "+resp2.name+" Double Click the map to start, use WASD")
    			
    			//store info

    			userinfo.name= resp2.name;
    			userinfo.gender= resp2.gender;
    			userinfo.id=resp2.id;

    			//second conn
    			FB.api("/me/picture", function(pic_resp){
	    			console.log(pic_resp);
            $('body').prepend('<img src="'+pic_resp.data.url+'"/>')
	    			userinfo.pic = pic_resp.data.url;
    			});

          FB.api("/me/photos",function(f_resp){
                console.log(f_resp);
                for(var i in f_resp.data){
                  for(var g in f_resp.data[i].images){
                    userPhotos.push(f_resp.data[i].images[g].source);
                  }
                }
            
              }
          );
    		});

    	}
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

// facebook end--------------------------
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

