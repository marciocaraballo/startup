//Modulo Movie del dia 3

define(["./director","./element"], function(Director, Element){ 

		Movie.prototype = Object.create(Element.prototype);

		function Movie() {	//Constructora, setea playing en false

			this['playing'] = false; 

		}; 

		Movie.prototype.play = function(){

			if(this.playing){
				console.log("Already playing "+this.name);
			}
			else{
				console.log("Now playing "+this.name);
				this.playing = true; 
			}

		}

		Movie.prototype.stop = function(){

			if(this.playing){
				console.log("Stopped "+this.name);
				this.playing = false; 
			}
			else{
				console.log("Is not playing "+this.name);
			}

		}

		/*Movie.prototype = {

			play: function(){
				if(this.playing){
					console.log("Already playing "+this.name);
				}
				else{
					console.log("Now playing "+this.name);
					this.playing = true; 
				}
			},

			stop: function(){
				if(this.playing){
					console.log("Stopped "+this.name);
					this.playing = false; 
				}
				else{
					console.log("Is not playing "+this.name);
				}
			}

		}*/

		return Movie; 
	}


)