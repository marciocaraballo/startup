//Clase element que contiene set y get de atributos

define(

	function(){

		function Element(){}

		Element.prototype = {

			set: function(attribName, attribVal){

				this[attribName] = attribVal;

			},


			get: function(attribName){
				
				return this[attribName]; 

			}
		}

		return Element; 

	}

)