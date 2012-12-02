$("#fullbody").load('index2.html',function(){

	var testButt = $("#testButton");
	var el = $("#inputText");

	testButt.click('click',function(){
		eval(el.value);
	});

	
	yepnope({	//De filereader
		test:window.FileReader && Modernizr.draganddrop,
		nope:'scripts/lib/polyfills/dropfile.js',
		complete: function(){

			//Lee un archivo como texto
			function readFileAsText(file){	 
				var reader = new FileReader();
				reader.readAsText(file);
				reader.onload = function(event){
					element.value = event.target.result;
				};
				reader.onerror = function(event){
					element.value = "Cant read the file. Sorry mate!"
				};
			}

			var element = document.querySelector("#fileText");

			element.addEventListener('dragover',function(event){
				event.preventDefault();
				return false;
			});

			element.addEventListener('drop',function(event){
			
				event.preventDefault(); 
				event.stopPropagation();
				readFileAsText(event.dataTransfer.files[0]);
				return false;
			});
		}
	});

	yepnope({	//Sobre geolocation
		test:Modernizr.geolocation,
		nope:'scripts/lib/polyfills/geolocation',
		complete: function(){

		  var positionButt = document.querySelector("#positionButton");
		  positionButt.addEventListener('click',function(event){

		  var initialLocation;
	      var map;
	      var infowindow = new google.maps.InfoWindow();
	      var mapOptions = {
	        zoom: 13,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      };
	      
	      if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition, onError);
	        // also monitor position as it changes
	        navigator.geolocation.watchPosition(showPosition);
	      } else {
	        onError();
	      }
	      
	      function showPosition(position) {
	        map = new google.maps.Map(document.querySelector("#geoMap"), mapOptions);
	        
	        var lat = position.coords.latitude;
	        var lng = position.coords.longitude;
	        
	        initialLocation = new google.maps.LatLng(lat, lng);
	        map.setCenter(initialLocation);
	        infowindow.setContent(lat + " " + lng);
	        infowindow.setPosition(initialLocation);
	        infowindow.open(map);
	      }
	      
	      function onError() {
	        if (navigator.geolocation) {
	          initialLocation = newyork;
	          contentString = "Error: The Geolocation service failed.";
	        } else {
	          initialLocation = siberia;
	          contentString = "Error: Your browser doesn't support geolocation.";
	        }
	        mapOptions.zoom = 4;
	        map = new google.maps.Map(document.querySelector("#geoMap"), mapOptions);
	        map.setCenter(initialLocation);
	        infowindow.setContent(contentString);
	        infowindow.setPosition(initialLocation);
	        infowindow.open(map);
	      }

		});

		}
	});

	//Persistencia de datos
	var saveButt = document.querySelector("#saveButton");
	saveButt.addEventListener('click',function(event){
		window.localStorage.setItem('text',el.value);
	});

	if( window.localStorage.getItem('text') ){
		var saved = window.localStorage.getItem('text');
		document.querySelector("#inputText").value = saved;
	}

	var el = document.querySelector("#inputText");
	el.addEventListener('dragstart',function(event){

		event.dataTransfer.setData('textValue', el.value);
			event.dataTransfer.effectAllowed = 'copy';

	},false)


});	//Se agrega el contenido de la pagina al div bajo yep

