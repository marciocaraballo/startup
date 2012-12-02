//Clase director con un único atributo

define(["element"], function(Element){

		Director.prototype = Object.create(Element.prototype);

		function Director(name){

			this['name'] =  name; 
			this['quotes'] = {}; 

		}

		Director.prototype.getName = function(){

			return this.name; 

		}

		Director.prototype.speak = function(pos){

			return this.quotes[pos]; 

		}

		return Director; 

	}

)