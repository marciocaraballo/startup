//Collection List

define(["backbone","movieModel"],
	function(Backbone,MovieModel){
		return Backbone.Collection.extend({

			model:MovieModel

		});
	});