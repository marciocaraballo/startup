//Defino una vista para un elemento Movie

define(["backbone","movie"],

	function(Backbone){

		return Backbone.View.extend({
			template:$('#itemTemplate').html(),
			events:{
				'click #toggleMovie' : 'toggleItem'
			},
			initialize:function(){
				this.model.bind('change',this.render,this);
				this.model.bind('destroy',this.remove,this);
			},
			render:function(){
				this.$el.html(this.template(this.model.toJSON()));	//Seteo el template instanciado con los valores de item movie, al elemento el
				return this;
			},
			toggleItem:function(){
				this.model.clear();
			},		    
			clear: function() {
		      this.destroy();
		    }
		});

	});