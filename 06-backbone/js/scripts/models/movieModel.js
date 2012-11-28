//Simple modelo para movie

define(["backbone"],

	function(Backbone){

		return Backbone.Model.extend({
			defaults:function(){
				return{
					title:'NoMovieTitle',
					selected:false		//Manejará el boton toggle
				}
			},
			initialize:function(){	//Seteo defaults si no tiene valor
				if(!this.get('title')){
					this.set({title:this.defaults.title});
				}
				this.set({'selected':false});
			},
			toggle:function(){	//Cambia el valor selected
				this.save({selected:!this.get('selected')});	//Invierto el valor
			},
			clear:function(){	//Lo borra
				this.destroy();
			}
		});

	}
);