//Collection List

define(["backbone","movie","underscore"],
	function(Backbone,Movie,_){
		return Backbone.Collection.extend({

			model:Movie,

			handleRemove:function(text){	//Elimino un elemento de la lista 
				var ref = this;
				_.each(this.models,function(item){
					if(item.get('title')==text){
						ref.remove(item);
					}
				});
			},
			canAdd:function(text){	//Agrego una pelicula, evito agregar repetidos
				var ref = this;
				var result=true;
				_.each(this.models,function(item){
					if(item.get('title')==text){
						//console.log("repeat "+mov);
						result= false;
					}
				});
				return result;  
			}

		});
	});