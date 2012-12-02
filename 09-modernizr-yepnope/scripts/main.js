require.config({

	baseUrl:'scripts',

	paths:{
		jquery:'lib/jquery-1.8.2',
		modernizr:'lib/modernizr-latest',
		yepnope:'lib/yepnope'
	},

	shim:{
		'modernizr':{
			exports:'Modernizr'
		},
		'yepnope':{
			exports:'yepnope'
		}
	}

});

requirejs(['jquery','modernizr','yepnope'],

	function(){

		$(document).ready(function(){

				yepnope({	//mediaqueries -> habilita todo lo demás
					test:Modernizr.mq('only all'),
					yep:'scripts/queries.js',
					nope:'scripts/mediaqueriesnope.js'
				});

				/*var butt = document.querySelector("#testButton");
				butt.addEventListener('click',function(){
					alert("huehueuhe");
				});
				console.log("hai");*/
		});
	});