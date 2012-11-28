requirejs.config({

	baseUrl:'js',

	paths:{
		
		jquery:'lib/jquery-1.8.2',
		underscore:'lib/underscore',
		backbone:'lib/backbone',
		movie:'scripts/models/movie',	//Item movie con titulo y toggle
		movieItem:'scripts/views/movieItem',	//Vista ascociada a un item movie
		List:'scripts/collections/List',	//Collection de items movies
		movieListView:'scripts/views/movieListView'	//vista de colección de movies
	},

	shim:{
		underscore:{
			exports:'_'
		},
		backbone:{
			deps:["underscore","jquery"],
			exports:'Backbone'
		}
	}

});

//Main app logic
requirejs(["jquery","backbone","underscore","movie","movieItem","List","movieListView"],
	function($, Backbone,_, Movie,MovieItem,List,MovieListView){

		$(document).ready(

			function(){

				var listView = new MovieListView(); 
	
			})
	}
)