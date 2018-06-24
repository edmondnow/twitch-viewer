

function getData() {
	var streamerlist = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

	for(var i = 0; i<8; i++){
		var streamer = streamerlist[i];
		var html = '';	
		var link = '';
		
		$.getJSON("https://wind-bow.gomix.me/twitch-api/users/"  + streamer + "?callback=?", function(streamUser){
			 var name = streamUser.display_name
			 var logo = streamUser.logo;

			 if(name==undefined){
			 	name = "No user";
			 };

			 if(logo==undefined){
			 	logo = "avatar.png";
			 };
			 html = '<a href="#" id="'+name+'"	>';
			 html += '<div class="holder-streams">';
			 html += '<img src="' + logo + '" class="thumbnail" alt="Default Gamer Photo">';
			 html += '<div class="inner' + " " + name + '">';
			 html += '<h1 class="streamer-name">' + name + '</h1>';
			 html += '<h3 class="online' + ' ' + name + 'status' + ' "><div class="status-online"></div>Online</h3><br />';
			 html += '<h3 class="game'+ ' ' + name +'game ' + '">Default State</h3>';
			 html += '</div>';
			 html += '</div></a>';
	  		 $("body").append(html);	
		});


			var streamerinline = streamerlist[i];
	

		    try{throw streamerinline}
		    catch(streamerinline) {
		        setTimeout(function(){
					$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + streamerinline + "?callback=?", function(getBanner){
						banner = 'url("' + getBanner.profile_banner + '")';;
						link = getBanner.url;
						linkTarget = "#"+streamerinline;
						$(linkTarget).attr("href",link);
						if(banner=== 'url("null")'){
						banner = 'url("gaming.png")';
						};
						var streamerClass = '.' + streamerinline;
						$(streamerClass).css("background-image",banner);
					}); 

					$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + streamerinline + "?callback=?", function(getStream){
						var streamerClassGame = '.' + streamerinline + 'game';
						var streamerClassStatus = '.' + streamerinline + 'status';
						var streamerLink = '#' + streamerinline;
						console.log(streamerLink);
						if(getStream.stream != null) {
							var game = getStream.stream.game;
							$(streamerLink).addClass('online-button');
							if(game!=null){
								$(streamerClassGame).html(game);	
							} else  {
								$(streamerClassGame).css('display', 'none');
								$(streamerClassStatus).html('<div class="status-offline"></div>Offline</h3>');
								$(streamerLink).addClass('offline-button');

							} 

						} else {
							$(streamerClassGame).css('display', 'none');
							$(streamerClassStatus).html('<div class="status-offline"></div>Offline</h3');
							$(streamerLink).addClass('offline-button');
		
						}

					});
		           
		        },1000);
		    }

		    try{throw streamerinline}
		    catch(streamerinline) {
		        setTimeout(function(){


		           
		        },1000);
		    }



	};

};


getData();


$("button[name='online']").click(function(){
	$('.offline-button').css('display','none');
	$('.online-button').css('display','inline');
});

$("button[name='offline']").click(function(){
	$('.online-button').css('display','none').fadeOut();
	$('.offline-button').css('display','inline');
});

$("button[name='all']").click(function(){
	$('.online-button').css('display','inline');
	$('.offline-button').css('display','inline');
});



