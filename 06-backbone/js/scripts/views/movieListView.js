//Vista correspondiente a todas las movies

define(["backbone","List","movie","underscore","movieItem"],
	function(Backbone, List,Movie,_,MovieItem){

		return Backbone.View.extend({

			el:$('body'),

			events:{
				'click #addButton' : 'addItem',
				'click #removeButton' : 'removeItem'
			},

			initialize:function(){

				_.bindAll(this,'render','addItem','appendItem');
				this.collection = new List(); 
				//this.collection.bind('add', this.appendItem);	
				this.collection.bind('add',this.appendItem);
				this.collection.bind('remove', this.render);	

			},

			render:function(movie){

				this.clear();

				var self = this;	//Guardo la referencia para no perderla
				_(this.collection.models).each(function(item){
					self.appendItem(item);
				},this);
			},

			addItem:function(){

				var movie = new Movie(); 	//Modelo de una movie cargado
				var title = $("#newMovie").val();
				

				if(this.collection.canAdd(title)){	
					movie.set('title',title);
					this.collection.add(movie);	//lleva a update de view por add
				}
			},

			appendItem:function(movie){

				var temp = $("#itemTemplate").html(); 
				temp = _.template(temp);
				var comp = temp({title:movie.get('title')});
				$('ul',this.el).append(comp);

			},

			removeItem:function(){

				var title = $("#newMovie").val();
				this.collection.handleRemove(title);
			},
			clear:function(){
				$('ul',this.el).html("");
			}

		});

	});